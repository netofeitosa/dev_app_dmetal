import styled from "styled-components";
import { theme } from "../../Theme";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 90%;
  gap: 20px;
`;

export const Section = styled.div`
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  width: 100%;
  border-radius: 10px;
  padding: 14px 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionLine = styled.div`
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

export const SectionCol1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SectionCol2 = styled.div`
  display: flex;
  align-items: center;

  & svg {
    color: ${({ Theme }) => theme.color.chevron};
  }
`;

export const SectionDivider = styled.div`
  padding-left: 47px;
`;
