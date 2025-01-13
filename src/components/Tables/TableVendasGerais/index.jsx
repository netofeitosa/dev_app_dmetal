import React, { useState } from "react";
import { Table, Select } from "antd";
import { Header, Title } from "./tablevendasgerais.style";

const { Option } = Select;

const TableVendasGerais = (props) => {
  const [mesSelecionado, setMesSelecionado] = useState("GERAL");

  const formatarValor = (valor) => {
    if (valor >= 1000000000) {
      return (parseFloat(valor) / 1000000000).toFixed(1) + "B";
    } else if (valor >= 1000000) {
      return (parseFloat(valor) / 1000000).toFixed(1) + "M";
    } else if (valor >= 1000) {
      return (parseFloat(valor) / 1000).toFixed(0) + "K";
    } else {
      return parseFloat(valor).toString();
    }
  };

  const handleMesChange = (value) => {
    setMesSelecionado(value);
  };

  const dados = props.dados.lojas
    .filter((loja) => loja.mes === mesSelecionado)
    .map((loja) => ({
      ...loja,
    }));

  const columns = [
    {
      title: "Loja",
      dataIndex: "nome_fantasia",
      key: "nome_fantasia",
      //fixed: "left",
      ellipsis: true,
      width: 140,
    },
    {
      title: "2022",
      dataIndex: "t2022",
      key: "t2022",
      sorter: (a, b) => a.t2022 - b.t2022,
      render: (text) => formatarValor(text),
    },
    {
      title: "2023",
      dataIndex: "t2023",
      key: "t2023",
      sorter: (a, b) => a.t2023 - b.t2023,
      render: (text) => formatarValor(text),
    },
    {
      title: "2024",
      dataIndex: "t2024",
      key: "t2024",
      sorter: (a, b) => a.t2024 - b.t2024,
      render: (text) => formatarValor(text),
    },
    {
      title: "2025",
      dataIndex: "t2025",
      key: "t2025",
      sorter: (a, b) => a.t2025 - b.t2025,
      defaultSortOrder: "descend",
      render: (text) => formatarValor(text),
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
            <span>Detalhamento por loja</span>
          </Title>
          <Select
            value={mesSelecionado}
            onChange={handleMesChange}
            size="middle"
            style={{ width: 120 }}
          >
            <Option value="GERAL">GERAL</Option>
            <Option value="JANEIRO">JANEIRO</Option>
            <Option value="FEVEREIRO">FEVEREIRO</Option>
            <Option value="MARÇO">MARÇO</Option>
            <Option value="ABRIL">ABRIL</Option>
            <Option value="MAIO">MAIO</Option>
            <Option value="JUNHO">JUNHO</Option>
            <Option value="JULHO">JULHO</Option>
            <Option value="AGOSTO">AGOSTO</Option>
            <Option value="SETEMBRO">SETEMBRO</Option>
            <Option value="OUTUBRO">OUTUBRO</Option>
            <Option value="NOVEMBRO">NOVEMBRO</Option>
            <Option value="DEZEMBRO">DEZEMBRO</Option>
          </Select>
        </Header>
      )}
      dataSource={dados}
      pagination={false}
      bordered
    />
  );
};

export default TableVendasGerais;
