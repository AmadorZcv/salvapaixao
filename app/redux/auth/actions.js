import Api from "../../config/api";
import AsyncStorage from "@react-native-community/async-storage";
export const SET_IS_LOGGED = "SET_IS_LOGGED";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const SET_CARGO = "SET_CARGO";
export const SET_NOME = "SET_NOME";
export const setCargo = cargo => ({
  type: SET_CARGO,
  payload: cargo
});
export const setNome = nome => ({
  type: SET_NOME,
  payload: nome
});

export const setIsFetching = bool => ({
  type: SET_IS_FETCHING,
  payload: bool
});
storeToken = async data => {
  try {
    await AsyncStorage.setItem("token", data);
  } catch (e) {
    console.log("erro foi", e);
  }
};
export const setIsLogged = bool => ({
  type: SET_IS_LOGGED,
  payload: bool
});
export function signIn(login, password) {
  return function fecthing(dispatch) {
    dispatch(setIsFetching(true));

    Api.post(`/auth/sign_in/`, { login, password })
      .then(response => {
        console.log("response é", response);
        const { token, nome, cargo } = response.data;
        Api.defaults.headers.common["Authorization"] = response.data.token;
        storeToken(token);
        dispatch(setIsLogged(true));
        dispatch(setIsFetching(false));
        dispatch(setNome(nome));
        dispatch(setCargo(cargo));
      })
      .catch(error => {
        Alert.alert("Erro ao se comunicar com o servidor");
        dispatch(isSavingOrcamento(false));
      });
  };
}
