import React, { useContext } from "react";
import { Api } from "../../services/api";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Table, Button, Divider, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import {
  ContainerObservacoes,
  ContainerObservacoesActions,
  ContainerObservacoesDescricao,
  ContainerObservacoesDetalhes,
  Header,
  Title,
} from "./tableaprovacoessaidas.style";

const TableAprovacoesSaidas = (props) => {
  const auth = useContext(AuthContext);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const columns = [
    {
      title: "Registro",
      dataIndex: "registro",
      key: "registro",
      sorter: (a, b) => a.registro - b.registro,
    },
    {
      title: "Filial",
      dataIndex: "filial",
      key: "filial",
      sorter: (a, b) => a.filial - b.filial,
    },
    {
      title: "Qtde",
      dataIndex: "quantidade",
      key: "quantidade",
      sorter: (a, b) => a.quantidade - b.quantidade,
    },
  ];

  const postSaidas = async (saida, autorizado) => {
    const data = {
      registro: saida,
      cod_origem: 4,
      origem: "SAIDAS_AVULSAS",
      usuario: auth.user.login,
      autorizado: autorizado,
    };

    messageApi.open({
      key,
      type: "loading",
      content: "Aguarde...",
    });

    try {
      const response = await Api.post("/saidas-avulsas", data);
      messageApi.open({
        key,
        type: "success",
        content: response.data.message,
        duration: 2,
        onClose: () => props.getSaidas(),
      });
    } catch (error) {
      messageApi.open({
        key,
        type: "error",
        content: error.response.data.message,
        duration: 2,
        onClose: () => props.getSaidas(),
      });
    }
  };

  return (
    <Table
      columns={columns}
      size="middle"
      title={() => (
        <Header>
          <Title>
            <span>Saídas Avulsas</span>
            <span>Aprovação de saídas avulsas realizadas no ERP</span>
          </Title>
        </Header>
      )}
      expandable={{
        expandedRowRender: (record) => (
          <ContainerObservacoes>
            <Divider orientation="center" plain>
              Detalhes
            </Divider>
            <ContainerObservacoesDetalhes>
              <div>
                <span>Usuário</span>
                <span>{record.usuario}</span>
              </div>
              <div>
                <span>Data</span>
                <span>{record.data}</span>
              </div>
            </ContainerObservacoesDetalhes>
            <Divider orientation="center"></Divider>
            <ContainerObservacoesDetalhes>
              <div>
                <span>Centro de Estoque</span>
                <span>{record.centro_estoque}</span>
              </div>
            </ContainerObservacoesDetalhes>
            <Divider orientation="center"></Divider>
            <ContainerObservacoesDescricao>
              <span>Observação</span>
              <span>{record.observacao}</span>
            </ContainerObservacoesDescricao>
            <Divider
              orientation="center"
              plain
              style={{ paddingBottom: "8px" }}
            >
              Ações
            </Divider>
            <ContainerObservacoesActions>
              {contextHolder}
              <Button
                icon={<CheckCircleOutlined />}
                iconPosition="end"
                style={{
                  borderColor: "green",
                  color: "green",
                }}
                onClick={() => postSaidas(record.registro, 1)}
              >
                Aprovar
              </Button>
              <Button
                icon={<CloseCircleOutlined />}
                iconPosition="end"
                style={{
                  padding: "0px 10px",
                }}
                onClick={() => postSaidas(record.registro, 2)}
                danger
              >
                Negar
              </Button>
            </ContainerObservacoesActions>
          </ContainerObservacoes>
        ),
      }}
      dataSource={props.value}
      pagination={true}
      // scroll={{
      //   y: 480,
      // }}
      bordered
    />
  );
};

export default TableAprovacoesSaidas;
