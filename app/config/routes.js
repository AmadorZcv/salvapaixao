import React from "react";
import { TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  NavigationActions
} from "react-navigation";
import Home from "../screens/Home";
import { Icon, Image } from "react-native-elements";
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
import SalvarOrcamento from "../screens/SalvarOrcamento";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Tela Inicial",
          headerLeft: (
            <Icon
              name={"menu"}
              type={"material-community"}
              color={Color.headerIcons}
              size={24}
              containerStyle={{ paddingLeft: 16 }}
            />
          ),
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
          headerTitle: "Salva Piso Madeira",

          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../img/icons/shopping-cart.png")}
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
          headerTitle: "Orçamento",
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.popToTop()}
              style={{ paddingRight: 16 }}
            >
              <Image
                style={{ height: 24, width: 24 }}
                source={require("../img/icons/home.png")}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    SalvarOrcamento: {
      screen: SalvarOrcamento,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salvar Orçamento"
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
        fontWeight: "500",
        marginLeft: 20
      },
      headerTintColor: Color.headerIcons
    }
  }
);

export default createAppContainer(HomeStack);
