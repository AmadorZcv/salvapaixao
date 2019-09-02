import React, { PureComponent } from "react";
import { ScrollView, StyleSheet, Animated, View } from "react-native";
import VersionNumber from "react-native-version-number";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { Text, Avatar, Image } from "react-native-elements";
import Drawer from "react-native-drawer";
import { Color } from "../styles";
import Sair from "./drawer/Sair";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class CustomDrawerContentComponent extends PureComponent {
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
            backgroundColor: "#7C7C7C"
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
                source={require("../img/icons/home.png")}
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
              backgroundColor: "#7C7C7C"
            }}
          >
            <Text style={{ color: Color.white }}>Daniel</Text>
            <Text style={{ color: Color.white }}>Gerente de vendas</Text>
          </View>
        </View>
        <DrawerItems {...props} />

        <View style={{ marginTop: 100 }}>
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
