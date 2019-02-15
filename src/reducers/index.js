import { combineReducers } from "redux";

import AppReducer from "./AppReducer";
import NewReducer from "./NewReducer";

const rootReducer = combineReducers({
  activities: AppReducer,
  data: NewReducer
});

export default rootReducer;
