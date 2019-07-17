import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";
import debounce from "redux-storage-decorator-debounce";
import filter from "redux-storage-decorator-filter";
import reducers from "./reducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Todos os middlewares vão juntos
const middleWare = [];
// Adicionando o Redux Thunk
middleWare.push(ReduxThunk);
const wrappedReducer = storage.reducer(reducers);
//Key para salvar no Async Storage
let engine = createEngine("my-save-key");
//Tempo para salvar
engine = debounce(engine, 1000);
//Salvar somente o user Reducer
engine = filter(engine, ["orcamento"]);
//Criar o middleware de storage
const reduxStorageMiddleware = storage.createMiddleware(engine);
// Adicionando o reduxStorage
middleWare.push(reduxStorageMiddleware);

//Função que carrega da memoria o estado
const loadStore = storage.createLoader(engine);

//const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
export default function makeStore(callback) {
  let store;
  if (__DEV__) {
    store = createStore(
      reducers,
      composeEnhancer(applyMiddleware(...middleWare))
    );
  } else {
    store = createStore(wrappedReducer, applyMiddleware(...middleWare));
  }

  //Chamar a função para carregar o estado e chamar o callback quando terminar
  loadStore(store)
    .then(newState => callback("State loaded", newState))
    .catch(() => callback("Failed to load previous state", null));
  return store;
}
