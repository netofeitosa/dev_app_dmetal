import React, { Suspense } from "react";

const Chart = React.lazy(() => import("react-apexcharts"));

const ChartVendasLojas = (props) => {
  const dados = props.dados;

  const vendaMesVarejo = parseFloat(dados.venda_mes_varejo);
  const vendaMesAnteriorVarejo = parseFloat(dados.venda_mes_anterior_varejo);
  const vendaMesAtacado = parseFloat(dados.venda_mes_atacado);
  const vendaMesAnteriorAtacado = parseFloat(dados.venda_mes_anterior_atacado);
  const vendaMesEcommerce = parseFloat(dados.venda_mes_ecommerce);
  const vendaMesAnteriorEcommerce = parseFloat(
    dados.venda_mes_anterior_ecommerce
  );
  const vendaMes = parseFloat(dados.venda_mes);
  const vendaMesAnterior = parseFloat(dados.venda_mes_anterior);
  const mediaMensal = parseFloat(dados.media_mensal_venda_ano);
  const mediaMensalVarejo = parseFloat(dados.media_mensal_venda_ano_varejo);
  const mediaMensalAtacado = parseFloat(dados.media_mensal_venda_ano_atacado);
  const mediaMensalEcommerce = parseFloat(dados.media_mensal_venda_ano_site);

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
    labels: ["Varejo", "Atacado", "Site", "Total"],
    xaxis: {
      type: "string",
      labels: {
        style: {
          fontSize: "11px",
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
      name: "Mês Atual",
      type: "column",
      data: [vendaMesVarejo, vendaMesAtacado, vendaMesEcommerce, vendaMes],
    },
    {
      name: "Mês Anterior",
      type: "column",
      data: [
        vendaMesAnteriorVarejo,
        vendaMesAnteriorAtacado,
        vendaMesAnteriorEcommerce,
        vendaMesAnterior,
      ],
    },
    /* {
      name: "Média",
      type: "line",
      data: [
        mediaMensalVarejo,
        mediaMensalAtacado,
        mediaMensalEcommerce,
        mediaMensal,
      ],
    }, */
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

export default ChartVendasLojas;
