import React, { useEffect, useLayoutEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import Spinner from "../../../components/Spinner";
import ChartVendasVsCupom from "../../../components/Charts/ChartVendasVsCupom";
import TableVendasVsCupom from "../../../components/Tables/TableVendasVsCupom";
import {
  Chart,
  ChartResume,
  Details,
  Resume,
  ResumeCard,
  ResumeCol1,
  ResumeCol2,
  ResumeDivider,
  ResumeTitle,
  Section,
  Table,
} from "./vendasvscupom.style";
import { Divider, FloatButton } from "antd";

import { useOutletContext } from "react-router-dom";

const VendasVsCupom = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Vendas x Cupom");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await api.getVendasCupons();
        setDados(response);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  return !removeLoading ? (
    <Spinner />
  ) : (
    <Section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.2 }}
    >
      <Resume>
        <ResumeCard>
          <ResumeCol1>
            <div>
              <span>Mês Atual</span>
            </div>
            <Divider />
            <div>
              <span>Total Venda </span>
              <span>{dados.total_venda_format}</span>
            </div>
            <div>
              <span>Total Cupom</span>
              <span>{dados.total_cupom_format}</span>
            </div>
            <div>
              <span>{dados.perc}%</span>
            </div>
          </ResumeCol1>

          <ResumeCol2>
            <div>
              <span>Mês Anterior</span>
            </div>
            <Divider />
            <div>
              <span>Total Venda </span>
              <span>{dados.total_venda_ant_format}</span>
            </div>
            <div>
              <span>Total Cupom</span>
              <span>{dados.total_cupom_ant_format}</span>
            </div>
            <div>
              <span>{dados.perc_ant}%</span>
            </div>
          </ResumeCol2>
        </ResumeCard>
      </Resume>

      <ChartResume>
        <ResumeDivider>
          <Divider orientation="center" plain>
            Gráfico
          </Divider>
        </ResumeDivider>
        <Chart>
          <ChartVendasVsCupom dados={dados} />
        </Chart>
      </ChartResume>

      <Details>
        <ResumeDivider>
          <Divider orientation="center" plain>
            Detalhes
          </Divider>
        </ResumeDivider>
        <Table>
          <TableVendasVsCupom dados={dados}></TableVendasVsCupom>
          <FloatButton.BackTop />
        </Table>
      </Details>
    </Section>
  );
};

export default VendasVsCupom;
