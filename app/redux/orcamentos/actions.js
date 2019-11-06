import { requestDownloadPermission, createPDF } from "../../config/fileSystem";
import { Alert } from "react-native";
import moment from "moment";
import Api from "../../config/api";
import { calculateIpic } from "../../config/mathUtils";

export const ADD_ORCAMENTO = "ADD_ORCAMENTO";
export const IS_SAVING = "IS_SAVING";
export const ADD_ID_ORCAMENTO = "ADD_ID_ORCAMENTO";
export const SET_TITLE_ORCAMENTO = "SET_TITLE_ORCAMENTO";
export const DECREASE_ID = "DECREASE_ID";
export const SET_LAST_ORCAMENTO = "SET_LAST_ORCAMENTO";
export const SET_ORCAMENTOS = "SET_ORCAMENTOS";
export const setOrcamentos = orcamentos => ({
  type: SET_ORCAMENTOS,
  payload: orcamentos
});

export const set_last_orcamento = id => ({
  type: SET_LAST_ORCAMENTO,
  payload: id
});

export const isSavingOrcamento = bool => ({
  type: IS_SAVING,
  payload: bool
});

export const add_orcamento = orcamento => ({
  type: ADD_ORCAMENTO,
  payload: orcamento
});

export const decrease_id = () => ({
  type: DECREASE_ID
});

export const set_id_orcamento = (orcamento, id) => ({
  type: ADD_ID_ORCAMENTO,
  payload: { orcamento, id }
});
export const set_title_orcamento = (orcamento, title) => ({
  type: SET_TITLE_ORCAMENTO,
  payload: { orcamento, title }
});

export function getOrcamentos() {
  return function fetching(dispatch) {
    Api.get("/api/orcamentos")
      .then(response => dispatch(setOrcamentos(response.data)))
      .catch(error => console.log(error));
  };
}
function buildTitle(orcamentos, criacao, filialId, funcionarioId) {
  const parent = moment(criacao).format("YYYYMMDD");
  let dayId = 0;
  if (orcamentos.hasOwnProperty(parent)) {
    const values = Object.keys(orcamentos[parent]).map(key => {
      const strings = key.split("-");
      return parseInt(strings[1]);
    });
    dayId = Math.max(values) + 1;
  } else {
    dayId = 1;
  }
  return `${parent}${filialId}${funcionarioId}-${dayId}`;
}
async function buildPdf(html, title, callback) {
  const download = await requestDownloadPermission();
  if (download) {
    createPDF(html, callback, title);
  } else {
    Alert.alert("Erro de permissão");
    callback();
  }
}
export function generatePDF(orcamento, generate) {
  return function fetching(dispatch, getState) {
    dispatch(isSavingOrcamento(true));
    const { orcamentos } = getState().orcamentos;
    const { isConsumidor, consumidor, revenda } = getState().products;
    const { filialId, funcionarioId } = getState().auth;
    const chaves = Object.keys(orcamento.cart);
    const carrinho = chaves.map(element => {
      const item = orcamento.cart[element];
      return { id: item.id.toString(), qtd: item.qtd };
    });

    const { detalhes } = orcamento;
    const {
      criacao,
      validade,
      condicao,
      parcela,
      telefone,
      cidade,
      nome,
      nomeCompleto,
      uf,
      cpf,
      email,
      ramo,
      obs
    } = detalhes;
    const title = buildTitle(orcamentos, criacao, filialId, funcionarioId);
    /*  {
      "ipi": 5,
      "ipic": 419,
      "preco": 8386,
      "produto_id": 10000,
      "qtd": 1,
      "total": 8805
  } */
    const products = isConsumidor ? consumidor : revenda;
    const produtos = carrinho.map(item => {
      const { qtd } = item;
      const { ipi, preco } = products[item.id];
      const ipic = calculateIpic(preco, ipi);
      const total = preco + ipic;
      const produto_id = parseInt(item.id);
      return { ipi, ipic, preco, produto_id, qtd, total };
    });
    const orcamentoRedux = {
      cidade,
      condicao,
      cpf,
      criacao: moment(criacao).format("DD/MM/YYYY"),
      email,
      nome,
      nome_completo: nomeCompleto,
      parcela,
      ramo,
      telefone,
      uf,
      validade: moment(validade).format("DD/MM/YYYY"),
      parent: moment(criacao).format("YYYYMMDD"),
      obs,
      title,
      produtos
    };
    Api.post("api/v1/orcamento", {
      orcamento: orcamentoRedux
    })
      .then(response => {
        dispatch(
          add_orcamento({
            ...orcamentoRedux,
            id: response.data.orcamento.id
          })
        );
        if (generate) {
          buildPdf(response.data.html, orcamento.title, () =>
            dispatch(isSavingOrcamento(false))
          );
        }
      })
      .catch(error => {
        Alert.alert("Erro ao se comunicar com o servidor");
        dispatch(add_orcamento(orcamentoRedux));
        dispatch(isSavingOrcamento(false));
      });
  };
}

export function generateFromId(id) {
  return function fecthing(dispatch) {
    dispatch(isSavingOrcamento(true));

    Api.get(`/api/orcamento/${id}`)
      .then(response => {
        buildPdf(response.data.html, orcamento.title, () =>
          dispatch(isSavingOrcamento(false))
        );
      })
      .catch(error => {
        Alert.alert("Erro ao se comunicar com o servidor");
        dispatch(isSavingOrcamento(false));
      });
  };
}

export function generateNoId(orcamento) {
  return function fetching(dispatch) {
    dispatch(isSavingOrcamento(true));
    Api.post("/api/v1/orcamento", {
      orcamento
    })
      .then(response => {
        dispatch(
          add_orcamento({
            ...orcamentoRedux,
            id: response.data.orcamento.id
          })
        );
        buildPdf(response.data.html, orcamento.title, () =>
          dispatch(isSavingOrcamento(false))
        );
      })
      .catch(error => {
        Alert.alert("Erro ao se comunicar com o servidor");
        dispatch(isSavingOrcamento(false));
      });
  };
}
