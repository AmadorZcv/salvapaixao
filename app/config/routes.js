import React from "react";
import { TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Home from "../screens/Home";
import { Icon } from "react-native-elements";
import { Color, TextStyle } from "../styles";
import SBancada from "../screens/SBancada";
import SMetais from "../screens/SMetais";
import SP from "../screens/SP";
import SPEspeciais from "../screens/SPEspeciais";
import SPintura from "../screens/SPintura";
import SPLimpeza from "../screens/SPLimpeza";
import SPResistente from "../screens/SPResistente";
import SQuina from "../screens/SQuina";
import SRalo from "../screens/SRalo";
import Carrinho from "../screens/Carrinho";
import Materiais from "../screens/Materiais";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Tela Inicial",
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaBancada: {
      screen: SBancada,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Bancada",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaMetais: {
      screen: SMetais,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Metais",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaPiso: {
      screen: SP,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Piso Tradicional",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaPisoEspeciais: {
      screen: SPEspeciais,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Piso Especiais",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaPisoPintura: {
      screen: SPintura,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Piso Pintura",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaPisoLimpeza: {
      screen: SPLimpeza,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Piso Limpeza",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaPisoResistente: {
      screen: SPResistente,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Piso Resistente",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaQuina: {
      screen: SQuina,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Quina",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvaRalo: {
      screen: SRalo,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Ralo",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    Materiais: {
      screen: Materiais,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Materiais Básicos",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={Color.headerIcons}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    Carrinho: {
      screen: Carrinho,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Carrinho"
        };
      }
    }
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.header
      },
      headerTitleStyle: {
        ...TextStyle.header,
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        color: Color.primaryText,
        fontSize: 20,
        fontWeight: "500"
      },
      headerTintColor: Color.headerIcons
    }
  }
);

export default createAppContainer(HomeStack);
