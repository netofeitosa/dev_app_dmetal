import React from "react";
import { Table } from "antd";
import { Header, Meta, Title } from "./tablevendaslojas.style";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const TableVendasLojas = (props) => {
  const formatarValor = (valor) => {
    if (valor >= 1000000000) {
      return (parseFloat(valor) / 1000000000).toFixed(1) + "B";
    } else if (valor >= 1000000) {
      return (parseFloat(valor) / 1000000).toFixed(1) + "M";
    } else if (valor >= 1000) {
      return (parseFloat(valor) / 1000).toFixed(1) + "K";
    } else {
      return parseFloat(valor).toString();
    }
  };

  const dados = props.dados.Resultado[0].lojas.map((loja) => ({
    ...loja,
    venda_dia_loja_format: formatarValor(loja.venda_dia_loja),
    venda_mes_loja_format: formatarValor(loja.venda_mes_loja),
    meta_format: formatarValor(loja.meta),
    meta_batida: loja.venda_mes_loja >= loja.meta,
  }));

  const columns = [
    {
      title: "Loja",
      dataIndex: "descricao_completa",
      key: "descricao_completa",
      fixed: "left",
    },
    {
      title: "Dia",
      dataIndex: "venda_dia_loja_format",
      key: "venda_dia_loja",
      sorter: (a, b) => a.venda_dia_loja - b.venda_dia_loja,
    },
    {
      title: "Mês",
      dataIndex: "venda_mes_loja_format",
      key: "venda_mes_loja",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.venda_mes_loja - b.venda_mes_loja,
    },
    {
      title: "Meta",
      dataIndex: "meta_format",
      key: "meta",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.venda_mes_loja - b.venda_mes_loja,
      render: (text, record) => (
        <Meta meta={record.meta_batida}>
          {text}
          {record.meta_batida ? (
            <CheckCircleOutlined />
          ) : (
            <CloseCircleOutlined />
          )}
        </Meta>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      size="middle"
      title={() => (
        <Header>
          <Title>
            <span>Lojas</span>
            <span>Detalhamento por loja mês atual</span>
          </Title>
        </Header>
      )}
      dataSource={dados}
      pagination={false}
      bordered
    />
  );
};

export default TableVendasLojas;
