import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../Theme";

export const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: 30px;
`;

export const Resume = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ResumeTitle = styled.div`
  display: flex;
  margin-bottom: 5px;
  width: 90%;
  font-size: 16px;
  font-weight: 500;
`;

export const ResumeDivider = styled.div`
  display: flex;
  width: 88%;
  margin-bottom: 10px;
`;

export const ResumeCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background-color: #ffffff;
  width: 90%;
  padding: 15px;
  gap: 10px;
  font-size: 14px;
`;

export const ResumeCol1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  & div {
    display: flex;
    flex-direction: column;
  }

  & div:nth-child(1) {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
  }

  & span:nth-child(1) {
    font-weight: bold;
  }

  & div:nth-child(5) {
    font-size: 18px;
    background-color: ${({ Theme }) => theme.color.background};
    width: 90%;
    padding: 10px 0px;
    align-items: center;
    border-radius: 6px;
  }
`;

export const ResumeCol2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: end;
  //padding: 5px;
  gap: 8px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  & div:nth-child(1) {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    align-items: center;
  }

  & span:nth-child(1) {
    font-weight: bold;
  }

  & div:nth-child(5) {
    font-size: 18px;
    background-color: ${({ Theme }) => theme.color.background};
    width: 90%;
    padding: 10px 0px;
    align-items: center;
    border-radius: 6px;
  }
`;

export const ChartResume = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ChartTitle = styled.div`
  display: flex;
  margin-bottom: 5px;
  width: 88%;
  font-size: 16px;
  font-weight: 500;
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

export const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Table = styled.div`
  width: 90%;
`;
