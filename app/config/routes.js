import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  DrawerActions,
  createBottomTabNavigator
} from "react-navigation";
import Home from "../screens/Home";
import { Image, normalize, Icon } from "react-native-elements";
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
import Orcamentos from "../screens/Orcamentos";
import Config from "../screens/Config";
import Orcamento from "../screens/Orcamento";
import CarrinhoButton from "../components/header/CarrinhoButton";
import HomeButton from "../components/header/HomeButton";
import MenuButton from "../components/header/MenuButton";
import InformacaoOrcamento from "../screens/InformacaoOrcamento";
//import LastOrcamento from "../screens/LastOrcamento"; <-- Ultimo Orçamento desabilitado temporariamente
import LoadButton from "../components/header/LoadButton";
import { SvgUri } from 'react-native-svg';

const OrcamentoStack = createStackNavigator(
  {
    Orcamentos: {
      screen: Orcamentos,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Orçamentos salvos"
        };
      }
    },
    Orcamento: {
      screen: Orcamento,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Orçamento",
          headerRight: (
            <LoadButton onPress={() => navigation.state.params.loadPress()} />
          )
        };
      }
    },
    InformacaoOrcamento: {
      screen: InformacaoOrcamento,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Informações de venda",

          headerRight: (
            <LoadButton onPress={() => navigation.state.params.loadPress()} />
          )
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
        fontSize: normalize(20),
        fontWeight: "500",
        marginLeft: 20
      },
      headerTintColor: Color.headerIcons
    }
  }
);

const ConfigStack = createStackNavigator(
  {
    Config: {
      screen: Config,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Configurações"
        };
      }
    },
    Orcamento: {
      screen: Orcamento,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Orçamento",
          headerRight: (
            <LoadButton onPress={() => navigation.state.params.loadPress()} />
          )
        };
      }
    },
    InformacaoOrcamento: {
      screen: InformacaoOrcamento,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Informações de venda",

          headerRight: (
            <LoadButton onPress={() => navigation.state.params.loadPress()} />
          )
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
        fontSize: normalize(20),
        fontWeight: "500",
        marginLeft: 20
      },
      headerTintColor: Color.headerIcons
    }
  }
);
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      path: "home",
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Tela Inicial",
          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
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
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    SalvaMetais: {
      screen: SMetais,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Metal",

          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    SalvaPiso: {
      screen: SP,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Tradicional",

          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    SalvaPisoEspeciais: {
      screen: SPEspeciais,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Pisos Especiais",

          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    SalvaPisoPintura: {
      screen: SPintura,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Pintura",

          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    SalvaPisoLimpeza: {
      screen: SPLimpeza,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Salva Limpeza",

          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    SalvaPisoResistente: {
      screen: SPResistente,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Extra Resistente",

          headerRight: (
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
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
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
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
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
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
            <CarrinhoButton onPress={() => navigation.navigate("Carrinho")} />
          )
        };
      }
    },
    Carrinho: {
      screen: Carrinho,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Carrinho de Orçamento",
          headerRight: <HomeButton onPress={() => navigation.popToTop()} />
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
        fontSize: normalize(20),
        fontWeight: "500",
        marginLeft: 20
      },
      headerTintColor: Color.headerIcons
    }
  }
);

const Tabs = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Orcamentos: { screen: OrcamentoStack },
    Config: { screen: ConfigStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <SvgUri
              width="120%"
              height="120%"
              style={{ opacity: 0.54 }}
              uri="https://gist.githubusercontent.com/booude/ea337365705a1c48985ea67bc39fb949/raw/ee579f1b513a9dc5660cf8f20be7a749ccdd4eda/home.svg"
            />
          );
        } else if (routeName === "Orcamentos") {
          return (
            <SvgUri
              width="100%"
              height="100%"
              style={{ opacity: 0.54 }}
              uri="https://gist.githubusercontent.com/booude/ea337365705a1c48985ea67bc39fb949/raw/ee579f1b513a9dc5660cf8f20be7a749ccdd4eda/folder.svg"
            />
          );
        } else if (routeName === "Config") {
          return (
            <SvgUri
              width="100%"
              height="100%"
              style={{ opacity: 0.54 }}
              uri="https://gist.githubusercontent.com/booude/ea337365705a1c48985ea67bc39fb949/raw/ee579f1b513a9dc5660cf8f20be7a749ccdd4eda/settings.svg"
            />
          );
        }

        // You can return any component that you like here
      }
    }),
    tabBarOptions: {
      activeTintColor: "#449296",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(Tabs);
