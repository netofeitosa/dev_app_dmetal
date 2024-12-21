import React from "react";
import { Table, Image } from "antd";
import { Header, TableStyles, Title } from "./tableanalisereferencias.style";
import imagem from "../../../assets/icone_image.png";

const TableAnaliseReferencias = (props) => {
  function NumberFormatedBR(value) {
    return parseFloat(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const dataSource = props.value.referencias.map((referencias) => ({
    ...referencias,
    referencia_descricao:
      referencias.referencia + " - " + referencias.descricao,
    preco_venda_format: NumberFormatedBR(referencias.preco_venda),
  }));

  // Ordenar o dataSource com base em qtde_venda
  const sortedDataSource = [...dataSource].sort(
    (a, b) => (b.qtde_venda || 0) - (a.qtde_venda || 0)
  );

  const columns = [
    {
      title: "Referência",
      dataIndex: "referencia",
      key: "referencia",
      width: 100,
      filters: [
        ...new Set(
          dataSource.map((item) => ({
            text: item.referencia,
            value: item.referencia,
          }))
        ),
      ],
      onFilter: (value, record) =>
        String(record.referencia).indexOf(value) === 0,
      filterSearch: true,
    },
    {
      title: "Descrição",
      dataIndex: "descricao",
      key: "descricao",
      ellipsis: true,
    },
    {
      title: "Grupo",
      dataIndex: "grupo",
      key: "grupo",
      width: 90,
      responsive: ["sm"],
    },
    {
      title: "Mix",
      dataIndex: "mix_modelo",
      key: "mix_modelo",
      width: 100,
      responsive: ["sm"],
    },
    {
      title: "Preço",
      dataIndex: "preco_venda_format",
      key: "preco_venda",
      width: 90,
      responsive: ["sm"],
    },
    {
      title: "Venda",
      dataIndex: "qtde_venda",
      key: "qtde_venda",
      width: 80,
      responsive: ["sm"],
      defaultSortOrder: "descend",
      sorter: (a, b) => a.qtde_venda - b.qtde_venda,
    },
    {
      title: "Imagem",
      key: "imagem",
      width: 70,
      align: "center",
      render: (record) => {
        // Verificar se record.ged é válido e gerar as URLs
        const gedList = record.ged ? record.ged.map((item) => item.ged) : [];

        return gedList.length > 0 ? (
          <Image.PreviewGroup
            items={gedList.map((ged) => ({
              src: `https://portal.dmetal.com.br/api/consumir-recibo.php?ged=${ged}`,
            }))}
            getContainer={() => document.body}
          >
            <Image width={20} src={imagem} />
          </Image.PreviewGroup>
        ) : (
          "N/A"
        );
      },
    },
  ];

  const renderCoresTable = (cores) => (
    <Table
      columns={[
        { title: "Cor", dataIndex: "cor", key: "cor" },
        {
          title: "Corte",
          dataIndex: "qtde_cortada",
          key: "qtde_cortada",
        },
        { title: "DPA", dataIndex: "qtde_dpa", key: "qtde_dpa" },
        { title: "Loja", dataIndex: "qtde_loja", key: "qtde_loja" },
        {
          title: "Venda",
          dataIndex: "qtde_venda",
          key: "qtde_venda",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.qtde_venda - b.qtde_venda,
        },
        {
          title: "PDia",
          dataIndex: "dias_primeira_entrada_loja",
          key: "dias_primeira_entrada_loja",
          responsive: ["sm"],
        },
        {
          title: "UDia",
          dataIndex: "dias_ultima_entrada_loja",
          key: "dias_ultima_entrada_loja",
          responsive: ["sm"],
        },
        {
          title: "V/DPA",
          dataIndex: "perc_venda_dpa",
          key: "perc_venda_dpa",
          render: (value) => value + "%",
        },
        {
          title: "V30%",
          dataIndex: "qtde_venda_30",
          key: "qtde_venda_30",
          responsive: ["sm"],
        },
        {
          title: "V50%",
          dataIndex: "qtde_venda_50",
          key: "qtde_venda_50",
          responsive: ["sm"],
        },
        {
          title: "V70%",
          dataIndex: "qtde_venda_70",
          key: "qtde_venda_70",
          responsive: ["sm"],
        },
      ]}
      dataSource={cores}
      pagination={false} // Desativar paginação na tabela de cores
      rowKey={(item) => item.cor} // Usar a cor como chave única
    />
  );

  return (
    <TableStyles>
      <Table
        columns={columns}
        dataSource={sortedDataSource}
        size="middle"
        rowKey="referencia"
        tableLayout="fixed"
        bordered
        expandable={{
          expandedRowRender: (record) => renderCoresTable(record.cores),
          rowExpandable: (record) => record.cores && record.cores.length > 0, // Expandir apenas se houver cores
        }}
        title={() => (
          <Header>
            <Title>
              <span>Coleção</span>
              <span>{dataSource[0].colecao}</span>
            </Title>
          </Header>
        )}
      />
    </TableStyles>
  );
};

export default TableAnaliseReferencias;
