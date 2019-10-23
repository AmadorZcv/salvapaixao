import Api from "../../config/api";

export const SET_CONSUMIDOR = "SET_CONSUMIDOR";
export const setConsumidor = produtos => ({
  type: SET_CONSUMIDOR,
  payload: produtos
});
export const SET_REVENDA = "SET_REVENDA";
export const setRevenda = produtos => ({
  type: SET_REVENDA,
  payload: produtos
});
export const SET_IS_CONSUMIDOR = "SET_IS_CONSUMIDOR";
export const setIsConsumidor = bool => ({
  type: SET_IS_CONSUMIDOR,
  payload: bool
});
export const SET_IS_LOADING = "SET_IS_LOADING";
export const setIsLoading = bool => ({
  type: SET_IS_LOADING,
  payload: bool
});

export function getProducts() {
  return function fecthing(dispatch) {
    dispatch(setIsLoading(true));

    Api.get("/config/produtos/")
      .then(response => {
        const { consumidor, revenda } = response.data;
        dispatch(setConsumidor(consumidor));
        dispatch(setRevenda(revenda));
      })
      .catch(error => {
        Alert.alert(
          "Erro",
          "Não conseguimos carregar os produtos, se tiver problemas reinicie o aplicativo"
        );
        dispatch(setIsLoading(false));
      });
  };
}
