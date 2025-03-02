import styled from "styled-components";
import { theme } from "../../Theme";
import { motion } from "framer-motion";

export const ContainerUser = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  width: 90%;

  & img {
    width: 120px;
    border-radius: 50%;
    box-shadow: ${({ Theme }) => theme.color.boxShadow};
  }
`;

export const ContainerUserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 10px;
  width: 100%;
`;

export const Gear = styled.div`
  margin-left: auto; /* Empurra o ícone para a direita */
  margin-right: 10px;
  margin-bottom: -5px;
`;

export const ContainerUserDataForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  padding: 10px 10px;
  border-radius: 10px;

  & span:nth-child(1) {
    font-size: 10px;
    font-weight: 400;
    padding-bottom: 3px;
  }

  & span:nth-child(2) {
    font-size: 13px;
    font-weight: 600;
  }
`;
