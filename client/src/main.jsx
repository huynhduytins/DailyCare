import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AppProvider } from "./context/appContext";

import global_en from "./translation/en/global.json";
import global_vi from "./translation/vi/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "vi",
  resources: {
    en: {
      global: global_en,
    },
    vi: {
      global: global_vi,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AppProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </AppProvider>
  // </React.StrictMode>
);
