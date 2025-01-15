import React, { Suspense } from "react";
//import Chart from "react-apexcharts";

const Chart = React.lazy(() => import("react-apexcharts"));

const ChartVendasGerais = (props) => {
  const dados = props.dados;
  const total_venda_2022 = dados.total_venda_2022;
  const total_venda_2022_mes = dados.total_venda_2022_mes;
  const total_venda_2023 = dados.total_venda_2023;
  const total_venda_2023_mes = dados.total_venda_2023_mes;
  const total_venda_2024 = dados.total_venda_2024;
  const total_venda_2024_mes = dados.total_venda_2024_mes;
  const total_venda_2025 = dados.total_venda_2025;
  const total_venda_2025_mes = dados.total_venda_2025_mes;

  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "Outfit, sans-serif",
    },
    stroke: {
      width: [0, 0, 3],
    },
    // title: {
    //   text: "Gráfico de Vendas",
    // },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [2],
      style: {
        fontSize: "9px",
        fontFamily: "Outfit",
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
    labels: ["2022", "2023", "2024", "2025"],
    xaxis: {
      type: "string",
      labels: {
        style: {
          fontSize: "10px",
          fontFamily: "Outfit",
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
        total_venda_2022,
        total_venda_2023,
        total_venda_2024,
        total_venda_2025,
      ],
    },
    {
      name: "Mês Atual",
      type: "column",
      data: [
        total_venda_2022_mes,
        total_venda_2023_mes,
        total_venda_2024_mes,
        total_venda_2025_mes,
      ],
    },
  ];

  return (
    <>
      <div style={{ width: "100%" }}>
        <Suspense fallback={<div>Loading chart...</div>}>
          <Chart options={options} series={series} type="line" height={350} />
        </Suspense>
      </div>
    </>
  );
};

export default ChartVendasGerais;
