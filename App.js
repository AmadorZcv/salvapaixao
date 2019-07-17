import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import SplashScreen from "./app/components/SplashScreen";
import makeStore from "./app/redux/store";
//import Router from "./app/config/Router";
import Drawer from "./app/config/routes";

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
    this.setState({ loadingRedux: false });
  }
  componentWillMount() {
    const store = makeStore(this.callbackRedux);
    this.setState({ store: store });
  }
  render() {
    if (this.state.loadingRedux) {
      return <SplashScreen />;
    }
    return (
      <Provider store={this.state.store}>
        <Drawer />
      </Provider>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
