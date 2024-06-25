import React from "react";
import Chart from "react-apexcharts";

const ChartVendasGerais = (props) => {
  const dados = props.dados;

  const total_venda_2021 = dados.total_venda_2021;
  const total_venda_2021_mes = dados.total_venda_2021_mes;
  const total_venda_2022 = dados.total_venda_2022;
  const total_venda_2022_mes = dados.total_venda_2022_mes;
  const total_venda_2023 = dados.total_venda_2023;
  const total_venda_2023_mes = dados.total_venda_2023_mes;
  const total_venda_2024 = dados.total_venda_2024;
  const total_venda_2024_mes = dados.total_venda_2024_mes;

  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      width: [0, 0, 3],
    },
    title: {
      text: "Gráfico de Vendas",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [2],
      style: {
        fontSize: "9px",
      },
      formatter: function (value) {
        if (value >= 1000000000) {
          return (value / 1000000000).toFixed(1) + "B";
        } else if (value >= 1000000) {
          return (value / 1000000).toFixed(1) + "M";
        } else if (value >= 1000) {
          return (value / 1000).toFixed(0) + "K";
        } else {
          return value.toFixed(1);
        }
      },
    },
    labels: ["2021", "2022", "2023", "2024"],
    xaxis: {
      type: "string",
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: [
      {
        // title: {
        //   text: "Vendas Mês",
        // },
        labels: {
          formatter: function (value) {
            if (value >= 1000000000) {
              return (value / 1000000000).toFixed(0) + "B";
            } else if (value >= 1000000) {
              return (value / 1000000).toFixed(0) + "M";
            } else if (value >= 1000) {
              return (value / 1000).toFixed(0) + "K";
            } else {
              return value.toFixed(0);
            }
          },
        },
      },
      {
        opposite: true,
        // title: {
        //   text: "Social Media",
        // },
        labels: {
          formatter: function (value) {
            if (value >= 1000000000) {
              return (value / 1000000000).toFixed(1) + "B";
            } else if (value >= 1000000) {
              return (value / 1000000).toFixed(1) + "M";
            } else if (value >= 1000) {
              return (value / 1000).toFixed(0) + "K";
            } else {
              return value.toFixed(1);
            }
          },
        },
      },
    ],
    fill: {
      opacity: 1,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontWeight: 500,

      markers: {
        width: 10,
        height: 10,
        radius: 10,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      offsetY: 10,
    },
    plotOptions: {
      bar: {
        barWidth: "100%",
      },
    },
  };

  const series = [
    {
      name: "Ano",
      type: "column",
      data: [
        total_venda_2021,
        total_venda_2022,
        total_venda_2023,
        total_venda_2024,
      ],
    },
    {
      name: "Mês Atual",
      type: "column",
      data: [
        total_venda_2021_mes,
        total_venda_2022_mes,
        total_venda_2023_mes,
        total_venda_2024_mes,
      ],
    },
  ];

  return (
    <>
      <div style={{ width: "100%" }}>
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </>
  );
};

export default ChartVendasGerais;
