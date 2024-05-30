import React, { useEffect, useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { Api } from "../../../services/api";
import ChartVendasLojas from "../../../components/Charts/ChartVendasLojas";
import {
  Chart,
  ChartResume,
  ResumeDivider,
  Section,
} from "./vendaslojas.style";
import { Divider } from "antd";

const VendasLojas = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Vendas Lojas");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await Api.get("/reportsVendasLojas");
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
      <ChartResume
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1 }}
      >
        <ResumeDivider>
          <Divider />
        </ResumeDivider>
        <Chart>
          <ChartVendasLojas dados={dados} />
        </Chart>
      </ChartResume>
    </Section>
  );
};

export default VendasLojas;
