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

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Paixão",
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerTitle: "Salva Piso",
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
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
          headerLeft: null,
          headerRight: (
            <TouchableOpacity
              onPress={() => navigation.navigate("Carrinho")}
              style={{ paddingRight: 10 }}
            >
              <Icon
                name={"ios-cart"}
                type={"ionicon"}
                color={"#fff"}
                size={36}
              />
            </TouchableOpacity>
          )
        };
      }
    },
    Carrinho: {
      screen: Home,
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
        backgroundColor: Color.primary
      },
      headerTitleStyle: {
        ...TextStyle.header,
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center"
      },
      headerTintColor: Color.white
    }
  }
);

export default createAppContainer(HomeStack);
