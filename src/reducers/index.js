import { combineReducers } from "redux";

import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
  activities: AppReducer
});

export default rootReducer;
