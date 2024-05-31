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
  gap: 10px;
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
  align-items: center;
  justify-content: center;
  width: 88%;
`;

export const ResumeCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background-color: #ffffff;
  width: 90%;
  padding: 15px 5px;
  gap: 10px;
  font-size: 14px;
`;

export const ResumeCardTitle = styled.div`
  display: flex;
  justify-content: center;

  & span {
    font-weight: bold;
  }
`;

export const ResumeCardItens = styled.div`
  text-align: center;
`;

export const ResumeCardItensCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 10px;
  background-color: ${({ Theme }) => theme.color.background};
  border: 1px solid #eeeeee;
  border-radius: 8px;
  margin: 0px 5px;
  padding: 8px 10px;

  & span:nth-child(1) {
    font-size: 11px;
    font-weight: bold;
  }

  & span:nth-child(4) {
    font-weight: 600;
  }
`;

export const ResumeCardItensInd = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background-color: ${(props) => (props.isNegative ? "red" : "green")};
  //background-color: red;
  color: #ffffff;
  font-weight: 600;
  padding: 3px 0px;
  margin-bottom: 5px;
  border-radius: 4px;
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
