import styled from "styled-components";

import { theme } from "../../Theme";

export const ContainerHeader = styled.header`
  background-color: ${({ Theme }) => theme.color.background};
  box-shadow: ${({ Theme }) => theme.color.boxShadow};
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;

  & a {
    text-decoration: none;
    color: inherit;
    outline: none;
    display: flex;
  }
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
