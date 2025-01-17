import FormatCurrency from "../FormatCurrency";

const GeneratePDFComparativoVendas = async (response, responseData) => {
  const moment = window.moment;
  const pdfMake = window.pdfMake;
  const vfsFonts = window.vfsFonts;

  pdfMake.addVirtualFileSystem(vfsFonts);

  const dataIni1 = moment(responseData.dataIni1).format("DD/MM/YYYY");
  const dataEnd1 = moment(responseData.dataEnd1).format("DD/MM/YYYY");
  const dataIni2 = moment(responseData.dataIni2).format("DD/MM/YYYY");
  const dataEnd2 = moment(responseData.dataEnd2).format("DD/MM/YYYY");
  const dataIni3 =
    responseData.dataIni3 && moment(responseData.dataIni3).format("DD/MM/YYYY");
  const dataEnd3 =
    responseData.dataEnd3 && moment(responseData.dataEnd3).format("DD/MM/YYYY");

  const periodos = response.periodos;

  const totalPeriodo1 = response.totalperiodo1;
  const totalPeriodo2 = response.totalperiodo2;
  const totalPeriodo3 = response.totalperiodo3;

  const analiseGeral = response.totalPerc1;
  const analiseGeral1 = response.totalPerc2;

  const percFillColorGeral =
    analiseGeral > 0 ? "#d4edda" : analiseGeral < 0 ? "#f8d7da" : "#ffffff";

  const percFillColorGeral1 =
    analiseGeral1 > 0 ? "#d4edda" : analiseGeral1 < 0 ? "#f8d7da" : "#ffffff";

  const docDefinition = {
    pageSize: "A4",
    pageMargins: [40, 60, 40, 60],
    content: [
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          widths: ["*"],
          body: [
            [{ text: "Comparativo de Vendas", style: "tableHeader" }],
            [""],
          ],
        },
        layout: "headerLineOnly",
      },
      { text: "Filtros:", fontSize: 11, bold: true },
      {
        ul: [
          {
            text: "Período 1: " + dataIni1 + " a " + dataEnd1,
            margin: [0, 1, 0, 1],
          },
          {
            text: "Período 2: " + dataIni2 + " a " + dataEnd2,
            margin: [0, 1, 0, 1],
          },
          ...(periodos === 3
            ? [
                {
                  text: "Período 3: " + dataIni3 + " a " + dataEnd3,
                  margin: [0, 1, 0, 1],
                },
              ]
            : []),
        ],
        style: "filter",
      },
      {
        table: {
          headerRows: 1,
          widths:
            periodos === 3
              ? ["auto", "*", "*", "*", "*", "*"]
              : ["auto", "*", "*", "*"],
          body: [
            [
              {
                text: "Empresa",
                alignment: "center",
                bold: true,
                fontSize: 9,
                fillColor: "#c0c0c0",
              },
              {
                text: "Período 1",
                alignment: "center",
                bold: true,
                fontSize: 9,
                fillColor: "#c0c0c0",
              },
              {
                text: "Análise",
                alignment: "center",
                bold: true,
                fontSize: 9,
                fillColor: "#c0c0c0",
              },
              {
                text: "Período 2",
                alignment: "center",
                bold: true,
                fontSize: 9,
                fillColor: "#c0c0c0",
              },
              ...(periodos === 3
                ? [
                    {
                      text: "Análise",
                      alignment: "center",
                      bold: true,
                      fontSize: 9,
                      fillColor: "#c0c0c0",
                    },
                    {
                      text: "Período 3",
                      alignment: "center",
                      bold: true,
                      fontSize: 9,
                      fillColor: "#c0c0c0",
                    },
                  ]
                : []),
            ],

            ...response.lojas.map((item) => {
              const percFillColor =
                item.perc > 0
                  ? "#d4edda"
                  : item.perc < 0
                  ? "#f8d7da"
                  : "#ffffff";

              const percFillColor1 =
                item.perc1 > 0
                  ? "#d4edda"
                  : item.perc1 < 0
                  ? "#f8d7da"
                  : "#ffffff";

              return [
                { text: item.loja, fontSize: 8 },
                { text: item.valor_liquido1_format, fontSize: 8 },
                {
                  text: item.perc_format,
                  fillColor: percFillColor,
                  alignment: "center",
                  fontSize: 8,
                },
                { text: item.valor_liquido2_format, fontSize: 8 },
                ...(periodos === 3
                  ? [
                      {
                        text: item.perc1_format,
                        fillColor: percFillColor1,
                        alignment: "center",
                        fontSize: 8,
                      },
                      {
                        text: item.valor_liquido3_format,
                        fontSize: 8,
                      },
                    ]
                  : []),
              ];
            }),

            [
              {
                text: "Totais",
                bold: true,
                fontSize: 8,
                fillColor: "#c0c0c0",
              },
              {
                text: FormatCurrency(totalPeriodo1),
                bold: true,
                fontSize: 8,
                fillColor: "#c0c0c0",
              },
              {
                text: analiseGeral.toFixed(2) + "%",
                bold: true,
                fontSize: 8,
                alignment: "center",
                fillColor: percFillColorGeral,
              },
              {
                text: FormatCurrency(totalPeriodo2),
                bold: true,
                fontSize: 8,
                fillColor: "#c0c0c0",
              },
              ...(periodos === 3
                ? [
                    {
                      text: analiseGeral1.toFixed(2) + "%",
                      bold: true,
                      fontSize: 8,
                      alignment: "center",
                      fillColor: percFillColorGeral1,
                    },
                    {
                      text: FormatCurrency(totalPeriodo3),
                      bold: true,
                      fontSize: 8,
                      fillColor: "#c0c0c0",
                    },
                  ]
                : []),
            ],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 0, 0, 14],
      },
      filter: {
        margin: [0, 5, 0, 12],
        fontSize: 9,
      },
      tableExample: {
        margin: [0, 5, 0, 15],
      },
      tableHeader: {
        bold: true,
        fontSize: 14,
        color: "black",
      },
    },
  };

  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  return new Promise((resolve, reject) => {
    pdfDocGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      resolve(url);
    }, reject);
  });
};

export default GeneratePDFComparativoVendas;
