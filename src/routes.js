import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Home from "./pages/Home";
import Details from "./pages/Details";

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home,
    Details
  })
);

export default Routes;
