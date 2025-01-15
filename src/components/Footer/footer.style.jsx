import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../Theme";

export const ContainerFooter = styled.footer`
  color: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: ${({ theme }) => theme.color.boxShadow};

  & .ant-col {
    font-family: "Outfit", serif !important;
  }
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

export const LinkAtivo = styled(motion.div)`
  border-top: #582183 3px solid;
  color: #582183;
  width: 70%;

  & div:nth-child(1) {
    padding: 7px 0 20px 0;
    width: 70%;
  }
`;

export const LinkInativo = styled.div`
  padding: 10px 0 20px 0;
`;
