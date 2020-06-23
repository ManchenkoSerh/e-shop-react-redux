import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
