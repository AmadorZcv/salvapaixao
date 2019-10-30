import React, { PureComponent } from "react";
import { ScrollView, StyleSheet, Animated, View } from "react-native";
import VersionNumber from "react-native-version-number";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { Text, Avatar, Image, CheckBox } from "react-native-elements";
import Drawer from "react-native-drawer";
import { Color } from "../styles";
import Sair from "./drawer/Sair";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { setIsConsumidor } from "../redux/products/actions";

class CustomDrawerContentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false
    };
  }
  openDrawer = () => {
    this.setState({ drawerOpen: true });
  };
  closeDrawer = () => {
    this.setState({ drawerOpen: false });
  };
  render() {
    const { props } = this;
    const { nome, cargo } = props;
    return (
      <Drawer
        type="overlay"
        ref={_drawer => (this.drawer = _drawer)}
        onOpen={this.openDrawer.bind(this)}
        onClose={this.closeDrawer.bind(this)}
        tapToClose={true}
        open={this.state.drawerOpen}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        panOpenMask={0.15}
        acceptPan={true}
        negotiatePan={true}
        closedDrawerOffset={-3}
        tweenEasing="easeInOutCirc"
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <View
          style={{
            backgroundColor: "#449296"
          }}
        >
          <View style={{ flexDirection: "row", height: 50 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-start",
                paddingLeft: 30
              }}
            >
              <Avatar
                source={require("../img/icons/avatar.jpg")}
                size={"small"}
                rounded
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-end",
                paddingRight: 5
              }}
            >
              <Image
                source={require("../img/logo/menu-ntp-logo.png")}
                style={{
                  width: 46,
                  height: 46
                }}
                resizeMode={"contain"}
              />
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: 240,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: 30,
            }}
          >
            <Text style={{ color: Color.white }}>{nome}</Text>
            <Text style={{ color: Color.white }}>{cargo}</Text>
          </View>
        </View>
        <DrawerItems {...props} />
        <CheckBox
          checked={this.props.isConsumidor}
          title="Preço Consumidor"
          onPress={() =>
            this.props.dispatch(setIsConsumidor(!this.props.isConsumidor))
          }
          containerStyle={{ borderWidth: 0, backgroundColor: "#fff" }}
        />
        <View style={{ marginTop: 80 }}>
          <Image
            source={require("../img/icons/qr-icon.png")}
            style={{ opacity: 0.5, alignSelf: "center" }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Sair />
            <Text>Sobre</Text>
          </View>
          <Text style={{ textAlign: "center" }}>Salva Compra</Text>
          <Text style={{ textAlign: "center" }}>
            Versão {VersionNumber.appVersion}
          </Text>
        </View>
      </Drawer>
    );
  }
}
const mapStateToProps = state => {
  const { nome, cargo } = state.auth;
  const { isConsumidor } = state.products;
  return { nome, cargo, isConsumidor };
};
export default connect(mapStateToProps)(CustomDrawerContentComponent);
const drawerStyles = {
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
