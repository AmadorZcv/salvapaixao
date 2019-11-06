import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from "./app/components/SplashScreen";
import makeStore from "./app/redux/store";
import Router from "./app/config/Router";
import Drawer from "./app/config/routes";
import { Color } from "./app/styles";
import Api from "./app/config/api";
import {
  isSavingOrcamento,
  getOrcamentos
} from "./app/redux/orcamentos/actions";
import { getProducts } from "./app/redux/products/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingRedux: true,
      store: null
    };
    this.callbackRedux = this.callbackRedux.bind(this);
  }
  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        Api.defaults.headers.common["Authorization"] = value;
      }
    } catch (e) {
      // error reading value
    }
  };
  callbackRedux(message, state) {
    if (__DEV__) {
      console.log("message", message, "New State", state);
    }
    //this.setState({ loadingRedux: false });
  }
  async loadStore() {
    const store = await makeStore();
    this.setState({ store: store }, () => {
      this.state.store.dispatch(isSavingOrcamento(false));
      this.state.store.dispatch(getProducts());
      this.state.store.dispatch(getOrcamentos());

      this.setState({ loadingRedux: false });
    });
  }
  componentWillMount() {
    this.loadStore();
    this.getToken();
  }
  render() {
    if (this.state.loadingRedux) {
      return <SplashScreen />;
    }
    return (
      <View style={{ flex: 1, backgroundColor: Color.background }}>
        <Provider store={this.state.store}>
          <Router />
        </Provider>
      </View>
    );
  }
}
export default App;
