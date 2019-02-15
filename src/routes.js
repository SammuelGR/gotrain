import React from "react";

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./pages/Home";
import Details from "./pages/Details";
import New from "./pages/New";

import TabIcon from "./components/TabIcon";

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
          return <TabIcon name={routeName} />;
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
