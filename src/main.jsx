import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ConfigProvider } from "antd";
import ptBR from "antd/locale/pt_BR";

import { GlobalStyle } from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ConfigProvider
      locale={ptBR}
      theme={{
        components: {
          Button: {
            colorPrimary: "#582183",
            algorithm: true,
            //fontFamily: "Roboto",
            fontFamily: "Outfit",
            fontSize: 12,
          },
          Input: {
            colorPrimary: "#dddbff",
            algorithm: true,
            //fontFamily: "Roboto",
            fontFamily: "Outfit",
          },
          Spin: {
            colorPrimary: "#582183",
            algorithm: true,
          },
          Table: {
            colorPrimary: "#582183",
            algorithm: true,
            //fontFamily: "Roboto",
            fontFamily: "Outfit",
            fontSize: 11,
          },
          Pagination: {
            colorPrimary: "#582183",
            algorithm: true,
            fontSize: 11,
            //fontFamily: "Roboto",
            fontFamily: "Outfit",
          },
          Divider: {
            margin: 0,
            marginLG: 0,
            marginMD: 0,
            algorithm: true,
            fontSize: 11,
            //fontFamily: "Roboto",
            fontFamily: "Outfit",
          },
          Message: {
            //fontFamily: "Roboto",
            fontFamily: "Outfit",
            zIndexPopup: 9999999,
          },
        },
      }}
    >
      <GlobalStyle />
      <App />
    </ConfigProvider>
  </ThemeProvider>
);
