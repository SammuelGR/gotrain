import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

import Routes from "./routes";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
