import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
  gap: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  & span:nth-child(1) {
    font-size: 15px;
    font-weight: bold;
  }

  & span:nth-child(2) {
    font-size: 10px;
  }
`;
