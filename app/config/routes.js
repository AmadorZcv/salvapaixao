import React from "react";
import { TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  NavigationActions,
  createDrawerNavigator,
  DrawerActions
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
import { CustomDrawerContentComponent } from "../components/DrawerComponent";
import Orcamentos from "../screens/Orcamentos";
import Config from "../screens/Config";
import Orcamento from "../screens/Orcamento";
import HeaderButton from "../components/header/HeaderButton";
import CarrinhoIcon from "../components/header/CarrinhoIcon";
import CarrinhoButton from "../components/header/CarrinhoButton";
import HomeButton from "../components/header/HomeButton";
import MenuButton from "../components/header/MenuButton";

const OrcamentoStack = createStackNavigator(
  {
    Orcamentos: {
      screen: Orcamentos,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Orçamentos",
          headerLeft: (
            <MenuButton
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
          headerRight: (
            <HomeButton onPress={() => navigation.navigate("Home")} />
          )
        };
      }
    },
    Orcamento: {
      screen: Orcamento,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Orcamento",

          headerRight: (
            <HomeButton onPress={() => navigation.navigate("Home")} />
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
        fontSize: 20,
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
          headerTitle: "Configurações",
          headerLeft: (
            <MenuButton
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
          headerRight: (
            <HomeButton onPress={() => navigation.navigate("Home")} />
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
        fontSize: 20,
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
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Tela Inicial",
          headerLeft: (
            <MenuButton
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          ),
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
          headerTitle: "Salva Metais",

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
          headerTitle: "Salva Piso Tradicional",

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
          headerTitle: "Salva Piso Madeira",

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
          headerTitle: "Salva Piso Pintura",

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
          headerTitle: "Salva Piso Limpeza",

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
          headerTitle: "Salva Piso Resistente",

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
          headerTitle: "Orçamento",
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
        fontSize: 20,
        fontWeight: "500",
        marginLeft: 20
      },
      headerTintColor: Color.headerIcons
    }
  }
);
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    Home: {
      //Title
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: "Inicial"
      }
    },
    Salvos: {
      //Title
      screen: OrcamentoStack,
      navigationOptions: {
        drawerLabel: "Orçamentos"
      }
    },
    Config: {
      //Title
      screen: ConfigStack,
      navigationOptions: {
        drawerLabel: "Configurações"
      }
    }
  },
  {
    contentComponent: CustomDrawerContentComponent
  }
);
//export default createAppContainer(DrawerNavigatorExample);
export default createAppContainer(DrawerNavigatorExample);
