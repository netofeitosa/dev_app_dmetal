import styled from "styled-components";

import { theme } from "../../Theme";

export const ContainerFooter = styled.footer`
  color: #000;
  padding: 10px 0 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: ${({ Theme }) => theme.color.boxShadow};
`;

export const ContainerFooterLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & span {
    font-size: 10px;
    font-weight: 500;
  }
`;
