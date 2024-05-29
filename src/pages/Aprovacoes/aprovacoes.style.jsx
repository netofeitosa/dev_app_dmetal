import styled from "styled-components";
import { theme } from "../../Theme";
import { motion } from "framer-motion";

export const ContainerAprovacoes = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 85%;
  gap: 20px;
`;

export const ContainerAprovacoesTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  margin-left: 5px;

  & span:nth-child(1) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const ContainerAprovacoesDetalhes = styled.div`
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  width: 100%;
  border-radius: 10px;
  padding: 14px 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContainerAprovacoesLinha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 7px 0px 12px;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;

export const ContainerAprovacoesChevron = styled.div`
  color: ${({ Theme }) => theme.color.chevron};
`;

export const ContainerAprovacoesDivider = styled.div`
  padding-left: 50px;
`;
