import { Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Header from "../Components/Header/Header";

import MainScreen from "../Containers/Main/Main";
import FavouriteListScreen from "../Containers/FavouriteList/FavouriteList";

import RouterConstant from "./RouteConstant";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        header: null
      }
    },
    FavouriteList: {
      screen: FavouriteListScreen,
      navigationOptions({ navigation }) {
        return {
          header: Header("My favourite people", navigation, null)
        };
      }
    }
  },
  {
    // Default config for all screens
    headerMode: Platform.OS === "ios" ? "float" : "screen",
    initialRouteName: RouterConstant.Main,
    cardStyle: { shadowColor: "transparent" },
    navigationOptions: {
      gesturesEnabled: Platform.OS === "ios"
    }
  }
);

export default createAppContainer(PrimaryNav);
