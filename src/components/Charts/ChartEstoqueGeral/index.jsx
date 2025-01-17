import React, { Suspense } from "react";
//import Chart from "react-apexcharts";

const Chart = React.lazy(() => import("react-apexcharts"));

const ChartEstoqueGeral = (props) => {
  const dados = props.dados;
  const tipo = props.tipo;
  const total_dmetal = dados.total_dmetal;
  const total_chica = dados.total_chica;
  const total_morah = dados.total_morah;
  const total_marca = dados.total_marca;
  const total_jeans = dados.total_jeans;
  const total_malha = dados.total_malha;
  const total_plano = dados.total_plano;

  const optionsMarca = {
    chart: {
      width: 300,
      type: "pie",
      fontFamily: "Outfit, sans-serif",
    },
    title: {
      text: "Por Marca",
    },
    labels: ["Dmetal", "Chica", "Morah"],
    legend: {
      position: "bottom",
    },
  };
  const optionsTecido = {
    chart: {
      width: 300,
      type: "pie",
      fontFamily: "Outfit, sans-serif",
    },
    title: {
      text: "Por Tecido",
    },
    labels: ["Jeans", "Malha", "Plano"],
    legend: {
      position: "bottom",
    },
  };

  const seriesMarca = [total_dmetal, total_chica, total_morah];
  const seriesTecido = [total_jeans, total_malha, total_plano];

  return (
    <div style={{ width: "100%", marginBottom: "10px" }}>
      <Suspense fallback={<div>Loading chart...</div>}>
        <Chart
          options={tipo === "marca" ? optionsMarca : optionsTecido}
          series={tipo === "marca" ? seriesMarca : seriesTecido}
          type="pie"
          height={300}
        />
      </Suspense>
    </div>
  );
};

export default ChartEstoqueGeral;
