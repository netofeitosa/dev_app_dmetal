import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../Theme";

export const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 15px;
`;

export const SectionDivider = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88%;
`;

export const ChartResume = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ResumeTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-style: italic;
  color: #bbbbbb;
  width: 88%;
  font-size: 12px;
  gap: 3px;
  margin-bottom: -10px;
`;

export const Chart = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const Table = styled(motion.div)`
  width: 90%;
`;
