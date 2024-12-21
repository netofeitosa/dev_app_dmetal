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

export const Resume = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResumeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  & form {
    width: 100%;
  }

  & button {
    width: 100%;
    height: 45px;
    margin-top: 10px;
  }

  .ant-form-item {
    margin-bottom: 10px;
  }

  .ant-select-multiple.ant-select-lg {
    font-size: 14px;
  }

  .ant-select-single.ant-select-lg .ant-select-selector {
    font-size: 14px;
  }
`;

export const ResumeCardTitle = styled.div`
  display: flex;
  justify-content: center;

  & span {
    font-weight: bold;
  }
`;

export const ResumeCardItensInd = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background-color: ${(props) => (props.$isNegative ? "red" : "green")};
  color: #ffffff;
  font-weight: 600;
  padding: 3px 0px;
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const Table = styled.div`
  width: 90%;
`;
