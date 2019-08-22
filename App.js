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
    console.log("Aqui");
    try {
      const value = await AsyncStorage.getItem("token");
      console.log("Value é", value);
      if (value !== null) {
        console.log("aqui???");
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
    console.log("store é", store);
    this.setState({ store: store }, () =>
      this.setState({ loadingRedux: false })
    );
  }
  componentWillMount() {
    this.loadStore();
    console.log("Mas que porra?");
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
