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
