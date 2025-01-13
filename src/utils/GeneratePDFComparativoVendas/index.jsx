import FormatCurrency from "../FormatCurrency";

const GeneratePDFComparativoVendas = async (response, responseData) => {
  const { default: moment } = await import("moment");
  const pdfMake = await import("pdfmake/build/pdfmake");
  const vfsFonts = await import("pdfmake/build/vfs_fonts");

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

  // Calcular os totais
  const totalPeriodo1 = response.lojas.reduce(
    (sum, item) => sum + item.valor_liquido1,
    0
  );
  const totalPeriodo2 = response.lojas.reduce(
    (sum, item) => sum + item.valor_liquido2,
    0
  );

  const totalPeriodo3 = response.lojas.reduce(
    (sum, item) => sum + item.valor_liquido3,
    0
  );

  const analiseGeral =
    totalPeriodo1 !== 0 ? (totalPeriodo2 / totalPeriodo1 - 1) * 100 : 100;

  const percFillColorGeral =
    analiseGeral > 0 ? "#d4edda" : analiseGeral < 0 ? "#f8d7da" : "#ffffff";

  if (periodos !== 3) {
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
            "Período 1: " + dataIni1 + " a " + dataEnd1,
            "Período 2: " + dataIni2 + " a " + dataEnd2,
          ],
          style: "filter",
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "*", "*"], // Ajuste as larguras das colunas conforme necessário
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
                  text: "Período 2",
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
              ],

              ...response.lojas.map((item) => {
                const percFillColor =
                  item.perc > 0
                    ? "#d4edda"
                    : item.perc < 0
                    ? "#f8d7da"
                    : "#ffffff";
                return [
                  { text: item.loja, fontSize: 8 },
                  { text: item.valor_liquido1_format, fontSize: 8 },
                  { text: item.valor_liquido2_format, fontSize: 8 },
                  {
                    text: item.perc_format,
                    fillColor: percFillColor,
                    alignment: "center",
                    fontSize: 8,
                  },
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
                  text: FormatCurrency(totalPeriodo2),
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
          fontSize: 10,
          italics: true,
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
    pdfMake.default.createPdf(docDefinition).download("comparativo_vendas.pdf");
  } else {
    const analiseGeral1 =
      totalPeriodo2 !== 0 ? (totalPeriodo3 / totalPeriodo2 - 1) * 100 : 100;
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
            "Período 1: " + dataIni1 + " a " + dataEnd1,
            "Período 2: " + dataIni2 + " a " + dataEnd2,
            "Período 3: " + dataIni3 + " a " + dataEnd3,
          ],
          style: "filter",
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "*", "*", "*", "*"], // Ajuste as larguras das colunas conforme necessário
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
              ],

              ...response.lojas.map((item) => {
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
                    fillColor: percFillColor1,
                    alignment: "center",
                    fontSize: 8,
                  },
                  { text: item.valor_liquido2_format, fontSize: 8 },
                  {
                    text: item.perc1_format,
                    fillColor: percFillColor1,
                    alignment: "center",
                    fontSize: 8,
                  },
                  { text: item.valor_liquido3_format, fontSize: 8 },
                ];
              }),

              [
                {
                  text: "Totais",
                  bold: true,
                  fontSize: 9,
                  fillColor: "#c0c0c0",
                },
                {
                  text: FormatCurrency(totalPeriodo1),
                  bold: true,
                  fontSize: 9,
                  fillColor: "#c0c0c0",
                },
                {
                  text: analiseGeral.toFixed(2) + "%",
                  bold: true,
                  fontSize: 9,
                  alignment: "center",
                  fillColor: percFillColorGeral,
                },
                {
                  text: FormatCurrency(totalPeriodo2),
                  bold: true,
                  fontSize: 9,
                  fillColor: "#c0c0c0",
                },
                {
                  text: analiseGeral1.toFixed(2) + "%",
                  bold: true,
                  fontSize: 9,
                  alignment: "center",
                  fillColor: percFillColorGeral1,
                },
                {
                  text: FormatCurrency(totalPeriodo3),
                  bold: true,
                  fontSize: 9,
                  fillColor: "#c0c0c0",
                },
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
          fontSize: 10,
          italics: true,
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

    pdfMake.default.createPdf(docDefinition).download("comparativo_vendas.pdf");
  }

  //pdfMake.default.createPdf(docDefinition).open();

  // const pdfDocGenerator = pdfMake.default.createPdf(docDefinition);
  // pdfDocGenerator.getBlob((blob) => {
  //   const url = URL.createObjectURL(blob);
  //   window.open(url, "_blank");
  // });
};

export default GeneratePDFComparativoVendas;
