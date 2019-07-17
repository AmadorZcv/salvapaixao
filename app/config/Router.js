import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Drawer from "./routes";
import Login from "../screens/Login";

class Router extends PureComponent {
  render() {
    return this.props.logged ? <Drawer /> : <Login />;
  }
}
const mapStateToProps = state => {
  const { logged } = state.orcamentos;
  return { logged };
};
export default connect(
  mapStateToProps,
  null
)(Router);
