import styled from "styled-components";
import { theme } from "../../../Theme";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
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

export const ContainerObservacoes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  background-color: ${({ Theme }) => theme.color.background};
`;

export const ContainerObservacoesDescricao = styled.div`
  text-align: center;
  font-weight: bold;
`;

export const ContainerObservacoesDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 0 10px;
  margin: 0 3px;
  background-color: #ffffff;

  & span:nth-child(1) {
    font-size: 11px;
    font-weight: bold;
    padding: 5px 0;
  }

  & span:nth-child(3) {
    font-size: 10px;
  }
`;
