import { requestDownloadPermission, createPDF } from "../../config/fileSystem";
import { Alert } from "react-native";
import moment from "moment";
import Api from "../../config/api";

export const ADD_ORCAMENTO = "ADD_ORCAMENTO";
export const IS_SAVING = "IS_SAVING";
export const ADD_ID_ORCAMENTO = "ADD_ID_ORCAMENTO";
export const DECREASE_ID = "DECREASE_ID";
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

export function generatePDF(orcamento) {
  return function fetching(dispatch, getState) {
    dispatch(isSavingOrcamento(true));
    const { lastId } = getState().orcamentos;
    const newId = lastId - 1;
    const chaves = Object.keys(orcamento.cart);
    const carrinho = chaves.map(element => {
      const item = orcamento.cart[element];
      return { id: item.id.toString(), qtd: item.qtd };
    });
    const download = requestDownloadPermission();
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
      ramo
    } = detalhes;

    const orcamento_api = {
      criacao: moment(criacao).format("DD/MM/YYYY"),
      validade: moment(validade).format("DD/MM/YYYY"),
      condicao,
      parcela,
      telefone,
      cidade,
      nome,
      nome_completo: nomeCompleto,
      uf,
      cpf,
      email,
      ramo,
      carrinho
    };
    if (download) {
      Api.post("/api/orcamento", {
        orcamento: orcamento_api
      })
        .then(response => {
          dispatch(
            add_orcamento({ ...orcamento, id: response.data.orcamento.id })
          );
          createPDF(response.data.html, () =>
            dispatch(isSavingOrcamento(false))
          );
        })
        .catch(error => {
          Alert.alert("Erro ao se comunicar com o servidor");
          dispatch(decrease_id());
          dispatch(add_orcamento({ ...orcamento, id: newId }));
          dispatch(isSavingOrcamento(false));
        });
    } else {
      Alert.alert("Erro de permissão");
      dispatch(isSavingOrcamento(false));
      dispatch(add_orcamento({ ...orcamento, id: newId }));
    }
  };
}

export function generateFromId(id) {
  return function fecthing(dispatch) {
    dispatch(isSavingOrcamento(true));
    const download = requestDownloadPermission();
    if (download) {
      Api.get(`/api/orcamento/${id}`)
        .then(response => {
          createPDF(response.data.html, () =>
            dispatch(isSavingOrcamento(false))
          );
        })
        .catch(error => {
          Alert.alert("Erro ao se comunicar com o servidor");
          dispatch(isSavingOrcamento(false));
        });
    } else {
      Alert.alert("Erro de permissão");
      dispatch(isSavingOrcamento(false));
    }
  };
}

export function generateNoId(orcamento) {
  return function fetching(dispatch, getState) {
    dispatch(isSavingOrcamento(true));
    const { lastId } = getState().orcamentos;
    const newId = lastId - 1;
    const chaves = Object.keys(orcamento.cart);
    const carrinho = chaves.map(element => {
      const item = orcamento.cart[element];
      return { id: item.id.toString(), qtd: item.qtd };
    });
    const download = requestDownloadPermission();
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
      ramo
    } = detalhes;

    const orcamento_api = {
      criacao: moment(criacao).format("DD/MM/YYYY"),
      validade: moment(validade).format("DD/MM/YYYY"),
      condicao,
      parcela,
      telefone,
      cidade,
      nome,
      nome_completo: nomeCompleto,
      uf,
      cpf,
      email,
      ramo,
      carrinho
    };
    if (download) {
      Api.post("/api/orcamento", {
        orcamento: orcamento_api
      })
        .then(response => {
          dispatch(set_id_orcamento(orcamento, response.data.orcamento.id));
          createPDF(response.data.html, () =>
            dispatch(isSavingOrcamento(false))
          );
        })
        .catch(error => {
          Alert.alert("Erro ao se comunicar com o servidor");
          dispatch(decrease_id());
          dispatch(add_orcamento({ ...orcamento, id: newId }));
          dispatch(isSavingOrcamento(false));
        });
    } else {
      Alert.alert("Erro de permissão");
      dispatch(isSavingOrcamento(false));
      dispatch(add_orcamento({ ...orcamento, id: newId }));
    }
  };
}
