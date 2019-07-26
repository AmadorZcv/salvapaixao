import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import SplashScreen from "./app/components/SplashScreen";
import makeStore from "./app/redux/store";
import Router from "./app/config/Router";
import Drawer from "./app/config/routes";
import { Color } from "./app/styles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingRedux: true,
      store: null
    };
    this.callbackRedux = this.callbackRedux.bind(this);
  }
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
