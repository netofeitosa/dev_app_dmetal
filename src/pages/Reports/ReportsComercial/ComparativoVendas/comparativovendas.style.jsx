import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../../../Theme";

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

  .ant-form-item-explain-error {
    font-size: 11px;
  }

  .ant-select-selection-placeholder {
    font-size: 14px;
  }

  .ant-select-multiple.ant-select-lg {
    font-size: 12px;
  }

  .ant-select-single.ant-select-lg .ant-select-selector {
    font-size: 12px;
  }

  .ant-piker .ant-piker-ranger {
    width: 100% !important;
  }

  .ant-picker-input > input::placeholder {
    font-size: 11px;
  }
`;

export const ResumeCardTitle = styled.div`
  display: flex;
  justify-content: center;

  & span {
    font-weight: bold;
  }
`;

export const ResumeFiltersSelect = styled.div`
  padding-top: 10px;
  //padding-bottom: 10px;
`;

export const ResumeFilters = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResumeFiltersPicker = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ResumeFiltersDivider = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ResumeFiltersButton = styled.div`
  padding-top: 10px;
`;
