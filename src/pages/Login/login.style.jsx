import styled from "styled-components";

import { motion } from "framer-motion";
import { theme } from "../../Theme";

export const ContainerLogin = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

export const ContainerLoginHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLoginWave = styled.div`
  width: 100%;
  margin-top: -50px;
  background-color: #ffffff;
`;

export const ContainerLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  padding: 10px 35px 0px 35px;
  background-color: #ffffff;
`;

export const ContainerLoginSectionHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: 0px 5px;
  margin-bottom: 25px;

  & div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  & div:nth-child(2) {
    display: flex;
    align-items: end;
    justify-content: end;
    color: ${({ Theme }) => theme.color.primary};
  }

  & span:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ContainerLoginSectionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & form {
    width: 100%;
  }

  & input {
    height: 35px;
  }

  & button {
    width: 100%;
    height: 50px;
  }
`;

export const ContainerLoginSectionSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    text-decoration: none;
    color: ${({ Theme }) => theme.color.primary};
    opacity: 0.5;
  }

  & span {
    font-size: 12px;
  }
`;
