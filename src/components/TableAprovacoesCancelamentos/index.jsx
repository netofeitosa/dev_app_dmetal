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
} from "./tableaprovacoescancelamentos.style";

const TableAprovacoesCancelamentos = (props) => {
  const auth = useContext(AuthContext);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const columns = [
    {
      title: "Prevenda",
      dataIndex: "registro",
      key: "registro",
      sorter: (a, b) => a.registro - b.registro,
    },
    {
      title: "Loja",
      dataIndex: "empresa",
      key: "empresa",
      sorter: (a, b) => a.empresa - b.empresa,
    },
    {
      title: "Data",
      dataIndex: "movimento",
      key: "movimento",
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor_2 - b.valor_2,
    },
  ];

  const postCancelamentos = async (cancelamento, autorizado) => {
    const data = {
      registro: cancelamento,
      cod_origem: 3,
      origem: "CANCELAMENTO_PREVENDAS",
      usuario: auth.user.login,
      autorizado: autorizado,
    };

    messageApi.open({
      key,
      type: "loading",
      content: "Aguarde...",
    });

    try {
      const response = await Api.post("/cancelamentos", data);
      messageApi.open({
        key,
        type: "success",
        content: response.data.message,
        duration: 2,
        onClose: () => props.getCancelamentos(),
      });
    } catch (error) {
      messageApi.open({
        key,
        type: "error",
        content: error.response.data.message,
        duration: 2,
        onClose: () => props.getCancelamentos(),
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
            <span>Cancelamento de Prevendas</span>
            <span>
              Aprovação de cancelamento de prevenda realizada pelas lojas
            </span>
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
                <span>Nome Fantasia</span>
                <span>{record.nome_fantasia}</span>
              </div>
              <div>
                <span>Valor</span>
                <span>{record.valor}</span>
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
                onClick={() => postCancelamentos(record.registro, 1)}
              >
                Aprovar
              </Button>
              <Button
                icon={<CloseCircleOutlined />}
                iconPosition="end"
                style={{
                  padding: "0px 10px",
                }}
                onClick={() => postCancelamentos(record.registro, 2)}
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

export default TableAprovacoesCancelamentos;
