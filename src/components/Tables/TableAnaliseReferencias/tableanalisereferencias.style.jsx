import styled from "styled-components";
import { theme } from "../../../Theme";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;

  & span:nth-child(1) {
    font-size: 15px;
    font-weight: bold;
  }

  & span:nth-child(2) {
    font-size: 11px;
  }
`;

export const TableStyles = styled.div`
  .descricao-column {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    width: 250px !important;
    max-width: 200px !important;
    //font-size: 8px !important;
  }

  .ant-table-cell {
    padding: 10px !important;
    font-size: 11px !important;
  }
`;
