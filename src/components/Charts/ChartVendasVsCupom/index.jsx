import React from "react";
import Chart from "react-apexcharts";

const ChartVendasVsCupom = (props) => {
  const dados = props.dados.Resultado[0];

  const totalVendaData = parseFloat(dados.total_venda);
  const totalVendaDataAnterior = parseFloat(dados.total_venda_ant);
  const totalCupomData = parseFloat(dados.total_cupom);
  const totalCupomDataAnterior = parseFloat(dados.total_cupom_ant);

  const options = {
    chart: {
      type: "bar",
      height: 200,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Mês Atual", "Mês Anterior"],
    },
    yaxis: {
      title: {
        text: "Total Venda",
      },
      labels: {
        formatter: function (value) {
          if (value >= 1000000000) {
            return (value / 1000000000).toFixed(1) + "B";
          } else if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + "M";
          } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + "K";
          } else {
            return value.toFixed(1);
          }
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const series = [
    {
      name: "Vendas",
      data: [totalVendaData, totalVendaDataAnterior],
    },
    {
      name: "Cupom",
      data: [totalCupomData, totalCupomDataAnterior],
    },
  ];

  return (
    <>
      <div style={{ width: "100%" }}>
        <Chart options={options} series={series} type="bar" height={300} />
      </div>

      {/* <div>
        <ul>
          {dados.lojas.map((key, index) => (
            <li key={index}>
              <h3>{key.nome_fantasia}</h3>
              <p>Loja: {key.loja}</p>
              <p>Total Venda: {key.total_venda_format}</p>
              <p>Total Cupom: {key.total_cupom_format}</p>
              <p>Percentual: {key.perc}%</p>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default ChartVendasVsCupom;
