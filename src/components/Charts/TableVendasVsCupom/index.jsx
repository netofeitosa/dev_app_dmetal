import React from "react";
import { Table } from "antd";
import { Header, Title } from "./tablevendacupom.style";

const TableVendasVsCupom = (props) => {
  // Função para formatar valores com sufixos B, M, K
  const formatarValor = (valor) => {
    if (valor >= 1000000000) {
      return (valor / 1000000000).toFixed(1) + "B";
    } else if (valor >= 1000000) {
      return (valor / 1000000).toFixed(1) + "M";
    } else if (valor >= 1000) {
      return (valor / 1000).toFixed(1) + "K";
    } else {
      return valor.toString();
    }
  };

  const dados = props.dados.Resultado[0].lojas.map((loja) => ({
    ...loja,
    total_venda_format: formatarValor(loja.total_venda),
    total_cupom_format: formatarValor(loja.total_cupom),
  }));

  const columns = [
    {
      title: "Loja",
      dataIndex: "nome_fantasia",
      key: "nome_fantasia",
      sorter: (a, b) => a.loja - b.loja,
    },
    {
      title: "Venda",
      dataIndex: "total_venda_format",
      key: "total_venda_format",
      sorter: (a, b) => a.total_venda - b.total_venda,
    },
    {
      title: "Cupom",
      dataIndex: "total_cupom_format",
      key: "total_cupom_format",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.total_cupom - b.total_cupom,
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

export default TableVendasVsCupom;
