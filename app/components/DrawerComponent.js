import React from "react";
import {
  ScrollView,
  StyleSheet,
  Animated,
  View,
  ImageBackground
} from "react-native";
import VersionNumber from "react-native-version-number";
import { DrawerItems, SafeAreaView } from "react-navigation";
import { Text, Avatar, Image } from "react-native-elements";
import { Color } from "../styles";
import Sair from "./drawer/Sair";

export const CustomDrawerContentComponent = props => {
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });
  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
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
        </SafeAreaView>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background
  }
});
