import Api from "../../config/api";
import AsyncStorage from "@react-native-community/async-storage";
export const SET_IS_LOGGED = "SET_IS_LOGGED";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const setIsFetching = bool => ({
  type: SET_IS_FETCHING,
  payload: bool
});
storeToken = async data => {
  console.log("Aqui salvou otoken");
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
        Api.defaults.headers.common["Authorization"] = response.data.token;
        storeToken(response.data.token);
        dispatch(setIsLogged(true));
        dispatch(setIsFetching(false));
      })
      .catch(error => {
        Alert.alert("Erro ao se comunicar com o servidor");
        dispatch(isSavingOrcamento(false));
      });
  };
}
