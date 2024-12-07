import { createGlobalStyle } from "styled-components";

import phoneRotateImage from "./assets/imagephonerotate.png";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: #040316;
  background-color: #f5f5f5;
}

@media (orientation: landscape) {
  body:not(.allow-landscape) div {
    display: none;
  }

  body:not(.allow-landscape) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    height: 100vh;
  }

  body:not(.allow-landscape)::before {
    content: "";
    display: block;
    width: 150px;
    height: 150px;
    background-image: url(${phoneRotateImage});
    background-size: 96px;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: -10px;
  }

  body:not(.allow-landscape)::after {
    content: "Para ter uma melhor experiência, deixe o seu dispositivo na posição vertical!";
  }
}

.ant-table, 
.ant-table-wrapper, 
.ant-table-title, 
.ant-table-header{
  border-radius: 0px !important;
}

.ant-table-wrapper tr.ant-table-expanded-row:hover > th,
.ant-table-wrapper tr.ant-table-expanded-row > td {
  background-color: #ffffff;
}

.ant-table-wrapper .ant-table-thead > tr > th {
  background-color: #f5f5f5;
}

.ant-table-expand-icon-col {
  width: 40px;
}

.ant-table-pagination.ant-pagination{
  margin: 0px !important;
  padding: 20px 0px;
  gap: 5px;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
}

`;
