import { createGlobalStyle } from "styled-components";

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
