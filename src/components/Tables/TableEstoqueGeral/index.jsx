import React, { useState } from "react";

import { Table, Col, Divider, Row } from "antd";

import {
  ContainerObservacoes,
  ContainerObservacoesDescricao,
  ContainerObservacoesDetalhes,
  Header,
  Title,
} from "./tableestoquegeral.style";

const TableEstoqueGeral = (props) => {
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

  const dados = props.dados.lojas.map((loja) => ({
    ...loja,
    descricao: loja.descricao,
    dmetal_format: formatarValor(loja.dmetal),
    dmetal: loja.dmetal,
    chica_format: formatarValor(loja.chica),
    chica: loja.chica,
    morah_format: formatarValor(loja.morah),
    morah: loja.morah,
    total_format: formatarValor(loja.total),
    total: loja.total,
    jeans: formatarValor(loja.jeans),
    malha: formatarValor(loja.malha),
    plano: formatarValor(loja.plano),
  }));

  const columns = [
    {
      title: "Loja",
      dataIndex: "descricao",
      key: "descricao",
      fixed: "left",
    },
    {
      title: "DM",
      dataIndex: "dmetal_format",
      key: "dmetal_format",
      sorter: (a, b) => a.dmetal - b.dmetal,
    },
    {
      title: "CF",
      dataIndex: "chica_format",
      key: "chica_format",
      sorter: (a, b) => a.chica - b.chica,
    },
    {
      title: "MH",
      dataIndex: "morah_format",
      key: "morah_format",
      sorter: (a, b) => a.morah - b.morah,
    },
    {
      title: "Total",
      dataIndex: "total_format",
      key: "total_format",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.total - b.total,
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
        </Header>
      )}
      expandable={{
        expandedRowRender: (record) => (
          <>
            {record.colecoes.map((colecao) => (
              <ContainerObservacoes>
                <div key={colecao.key_colecao}>
                  <ContainerObservacoesDescricao>
                    <span>{colecao.colecao}</span>
                  </ContainerObservacoesDescricao>

                  <Row>
                    <Col span={6}>
                      <ContainerObservacoesDetalhes>
                        <span>{formatarValor(colecao.jeans)}</span>
                        <Divider />
                        <span>Jeans</span>
                      </ContainerObservacoesDetalhes>
                    </Col>
                    <Col span={6}>
                      <ContainerObservacoesDetalhes>
                        <span>{formatarValor(colecao.malha)}</span>
                        <Divider />
                        <span>Malha</span>
                      </ContainerObservacoesDetalhes>
                    </Col>
                    <Col span={6}>
                      <ContainerObservacoesDetalhes>
                        <span>{formatarValor(colecao.plano)}</span>
                        <Divider />
                        <span>Plano</span>
                      </ContainerObservacoesDetalhes>
                    </Col>
                    <Col span={6}>
                      <ContainerObservacoesDetalhes>
                        <span>{formatarValor(colecao.total)}</span>
                        <Divider />
                        <span>Total</span>
                      </ContainerObservacoesDetalhes>
                    </Col>
                  </Row>
                </div>
              </ContainerObservacoes>
            ))}
          </>
        ),
      }}
      dataSource={dados}
      pagination={false}
      bordered
    />
  );
};

export default TableEstoqueGeral;
