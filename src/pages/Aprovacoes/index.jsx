import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";

import {
  HiOutlineReceiptPercent,
  HiOutlineCurrencyDollar,
  HiOutlineArrowsRightLeft,
  HiOutlineXCircle,
  HiMiniChevronRight,
} from "react-icons/hi2";

import Spinner from "../../components/Spinner";
import { Api } from "../../services/api";
import {
  ContainerAprovacoes,
  ContainerAprovacoesChevron,
  ContainerAprovacoesDetalhes,
  ContainerAprovacoesDivider,
  ContainerAprovacoesLinha,
  ContainerAprovacoesTitle,
} from "./aprovacoes.style";

const Aprovacoes = () => {
  const [dadosHome, setDadosHome] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const getHomeAprovacoes = async () => {
      try {
        const response = await Api.get("/aprovacoes");
        setDadosHome(response.data);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getHomeAprovacoes();
  }, []);

  return (
    <ContainerAprovacoes
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <ContainerAprovacoesTitle>
        <span>Aprovações</span>
      </ContainerAprovacoesTitle>

      {!removeLoading ? (
        <Spinner />
      ) : (
        <ContainerAprovacoesDetalhes>
          <ContainerAprovacoesLinha>
            <div>
              <HiOutlineCurrencyDollar size={26} style={{ strokeWidth: 1.5 }} />
              <span>Despesa de Loja</span>
            </div>

            <div>
              <span>{dadosHome?.despesas}</span>
              <ContainerAprovacoesChevron>
                <HiMiniChevronRight
                  size={24}
                  onClick={() => [Navigate("/app_dmetal_dev/Despesas")]}
                />
              </ContainerAprovacoesChevron>
            </div>
          </ContainerAprovacoesLinha>
          <ContainerAprovacoesDivider>
            <Divider />
          </ContainerAprovacoesDivider>
          <ContainerAprovacoesLinha>
            <div>
              <HiOutlineReceiptPercent size={26} style={{ strokeWidth: 1.5 }} />

              <span>Desconto de Prevenda</span>
            </div>
            <div>
              <span>{dadosHome?.descontos}</span>
              <ContainerAprovacoesChevron>
                <HiMiniChevronRight
                  size={24}
                  onClick={() => [Navigate("/app_dmetal_dev/Descontos")]}
                />
              </ContainerAprovacoesChevron>
            </div>
          </ContainerAprovacoesLinha>
          <ContainerAprovacoesDivider>
            <Divider />
          </ContainerAprovacoesDivider>
          <ContainerAprovacoesLinha>
            <div>
              <HiOutlineXCircle size={26} style={{ strokeWidth: 1.5 }} />
              <span>Cancelamento de Prevenda</span>
            </div>
            <div>
              <span>{dadosHome?.cancelamentos}</span>
              <ContainerAprovacoesChevron>
                <HiMiniChevronRight
                  size={24}
                  onClick={() => [Navigate("/app_dmetal_dev/Cancelamentos")]}
                />
              </ContainerAprovacoesChevron>
            </div>
          </ContainerAprovacoesLinha>
          <ContainerAprovacoesDivider>
            <Divider />
          </ContainerAprovacoesDivider>
          <ContainerAprovacoesLinha>
            <div>
              <HiOutlineArrowsRightLeft
                size={26}
                style={{ strokeWidth: 1.5 }}
              />
              <span>Saída Avulsas</span>
            </div>
            <div>
              <span>{dadosHome?.saidas}</span>
              <ContainerAprovacoesChevron>
                <HiMiniChevronRight
                  size={24}
                  onClick={() => [Navigate(`/app_dmetal_dev/Saídas Avulsas`)]}
                />
              </ContainerAprovacoesChevron>
            </div>
          </ContainerAprovacoesLinha>
        </ContainerAprovacoesDetalhes>
      )}
    </ContainerAprovacoes>
  );
};

export default Aprovacoes;
