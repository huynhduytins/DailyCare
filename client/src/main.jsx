import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducers from "./redux/reducers";
import mySaga from "./redux/sagas";

// const sagaMiddleWare = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

// sagaMiddleWare.run(mySaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Provider>
);
