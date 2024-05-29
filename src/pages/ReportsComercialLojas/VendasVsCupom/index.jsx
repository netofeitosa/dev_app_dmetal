import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";
import Spinner from "../../../components/Spinner";
import ChartVendasVsCupom from "../../../components/Charts/ChartVendasVsCupom";
import {
  Chart,
  ChartResume,
  ChartTitle,
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
import { Divider } from "antd";
import TableVendasVsCupom from "../../../components/Charts/TableVendasVsCupom";

const VendasVsCupom = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await Api.get("/reportsVendasCupons");
        setDados(response.data);
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
    <Section>
      <Resume
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1 }}
      >
        <ResumeCard>
          <ResumeCol1>
            <div>
              <span>Mês Atual</span>
            </div>
            <Divider />
            <div>
              <span>Total Venda </span>
              <span>{dados.Resultado[0].total_venda_format}</span>
            </div>
            <div>
              <span>Total Cupom</span>
              <span>{dados.Resultado[0].total_cupom_format}</span>
            </div>
            <div>
              <span>{dados.Resultado[0].perc.toFixed(2)}%</span>
            </div>
          </ResumeCol1>

          <ResumeCol2>
            <div>
              <span>Mês Anterior</span>
            </div>
            <Divider />
            <div>
              <span>Total Venda </span>
              <span>{dados.Resultado[0].total_venda_ant_format}</span>
            </div>
            <div>
              <span>Total Cupom</span>
              <span>{dados.Resultado[0].total_cupom_ant_format}</span>
            </div>
            <div>
              <span>{dados.Resultado[0].perc_ant.toFixed(2)}%</span>
            </div>
          </ResumeCol2>
        </ResumeCard>
      </Resume>

      <ChartResume
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <ResumeDivider>
          <Divider orientation="center" plain>
            Gráfico
          </Divider>
        </ResumeDivider>
        <Chart>
          <ChartVendasVsCupom dados={dados} />
        </Chart>
      </ChartResume>

      <Details
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1, delay: 0.2 }}
      >
        <ResumeDivider>
          <Divider orientation="center" plain>
            Detalhes
          </Divider>
        </ResumeDivider>
        <Table>
          <TableVendasVsCupom dados={dados}></TableVendasVsCupom>
        </Table>
      </Details>
    </Section>
  );
};

export default VendasVsCupom;
