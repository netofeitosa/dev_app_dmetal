import styled from "styled-components";
import { theme } from "../../Theme";

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

export const ContainerObservacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: ${({ Theme }) => theme.color.boxShadow};
`;

export const ContainerObservacoesDetalhes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  & div:nth-child(1) {
    display: flex;
    flex-direction: column;
  }

  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-start;
  }

  & span:nth-child(1) {
    font-weight: bold;
  }
`;

export const ContainerObservacoesDescricao = styled.div`
  display: flex;
  flex-direction: column;

  & span:nth-child(1) {
    font-weight: bold;
  }
`;

export const ContainerObservacoesActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  & div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;
