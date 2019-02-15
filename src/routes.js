import React from "react";

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./pages/Home";
import Details from "./pages/Details";
import New from "./pages/New";

import TabIconHome from "./components/TabIconHome";
import TabIconNew from "./components/TabIconNew";

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Feed: createStackNavigator(
        {
          Home,
          Details
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: "#FFC107"
            },
            headerTintColor: "#FFF"
          }
        }
      ),
      New
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          if (routeName === "Feed") {
            if (focused) return <TabIconHome selected />;
            return <TabIconHome />;
          }
          if (routeName === "New") {
            if (focused) return <TabIconNew selected />;
            return <TabIconNew />;
          }
        }
      }),
      tabBarOptions: {
        activeTintColor: "#FFC107",
        inactiveTintColor: "#CCC"
      }
    }
  )
);

export default Routes;
