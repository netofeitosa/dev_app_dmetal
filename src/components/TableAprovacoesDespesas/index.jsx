import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Api } from "../../services/api";
import { Table, Button, Divider, message } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import {
  ContainerObservacoes,
  ContainerObservacoesActions,
  ContainerObservacoesDescricao,
  ContainerObservacoesDetalhes,
  Header,
  Title,
} from "./tableaprovacoesdespesas.style";

const TableAprovacoesDespesas = (props) => {
  const auth = useContext(AuthContext);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const columns = [
    {
      title: "Despesa",
      dataIndex: "despesa",
      key: "despesa",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.despesa - b.despesa,
    },
    {
      title: "Loja",
      dataIndex: "loja",
      key: "loja",
      sorter: (a, b) => a.loja - b.loja,
    },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor_2 - b.valor_2,
    },
  ];

  const postDespesas = async (despesa, autorizado) => {
    const data = {
      registro: despesa,
      cod_origem: 1,
      origem: "DESPESAS_COFRES",
      usuario: auth.user.login,
      autorizado: autorizado,
    };

    messageApi.open({
      key,
      type: "loading",
      content: "Aguarde...",
    });

    try {
      const response = await Api.post("/despesas", data);
      messageApi.open({
        key,
        type: "success",
        content: response.data.message,
        duration: 2,
        onClose: () => props.getDespesas(),
      });
    } catch (error) {
      messageApi.open({
        key,
        type: "error",
        content: error.response.data.message,
        duration: 2,
        onClose: () => props.getDespesas(),
      });
    }
  };

  const getGed = (ged) => {
    window.open(
      "https://portal.dmetal.com.br/api/consumir-recibo.php?ged=" + ged,
      "_blank"
    );
  };

  return (
    <Table
      columns={columns}
      title={() => (
        <Header>
          <Title>
            <span>Despesas de Lojas</span>
            <span>Aprovação de despesas de lojas geradas pelo ERP</span>
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
                <span>Movimento</span>
                <span>{record.movimento}</span>
              </div>
            </ContainerObservacoesDetalhes>

            <ContainerObservacoesDescricao>
              <span>Observação</span>
              <span>{record.observacao}</span>
            </ContainerObservacoesDescricao>
            <Divider orientation="center" plain>
              Ações
            </Divider>
            <ContainerObservacoesActions>
              <div>
                {contextHolder}
                <Button
                  icon={<CheckCircleOutlined />}
                  iconPosition="end"
                  style={{
                    borderColor: "green",
                    color: "green",
                    padding: "0px 10px",
                  }}
                  onClick={() => postDespesas(record.despesa, 1)}
                >
                  Aprovar
                </Button>
                <Button
                  icon={<CloseCircleOutlined />}
                  iconPosition="end"
                  style={{
                    padding: "0px 10px",
                  }}
                  onClick={() => postDespesas(record.despesa, 2)}
                  danger
                >
                  Negar
                </Button>
              </div>
              <div>
                {record.ged == 0 ? (
                  <Button
                    disabled
                    icon={<DownloadOutlined />}
                    iconPosition="end"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#dfdfdf",
                      color: "#dfdfdf",
                      padding: "0px 10px",
                    }}
                  >
                    Recibo
                  </Button>
                ) : (
                  <>
                    <Button
                      icon={<DownloadOutlined />}
                      iconPosition="end"
                      style={{
                        borderColor: "gray",
                        color: "gray",
                        padding: "0px 10px",
                      }}
                      onClick={() => getGed(record.ged)}
                    >
                      Recibo
                    </Button>
                  </>
                )}
              </div>
            </ContainerObservacoesActions>
          </ContainerObservacoes>
        ),
      }}
      dataSource={props.value}
      pagination={true}
      size="middle"
      // scroll={{
      //   y: 240,
      // }}
      bordered
    />
  );
};

export default TableAprovacoesDespesas;
