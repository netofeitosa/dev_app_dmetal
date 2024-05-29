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
} from "./tableaprovacoesdescontos.style";

const TableAprovacoesDescontos = (props) => {
  const auth = useContext(AuthContext);

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const columns = [
    {
      title: "Prevenda",
      dataIndex: "documento",
      key: "documento",
      sorter: (a, b) => a.documento - b.documento,
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      sorter: (a, b) => a.valor_2 - b.valor_2,
    },
    {
      title: "%",
      dataIndex: "desconto_perc",
      key: "desconto_perc",
    },
    {
      title: "Liquido",
      dataIndex: "valor_liquido",
      key: "valor_liquido",
      sorter: (a, b) => a.valor_liquido_2 - b.valor_liquido_2,
    },
  ];

  const postDescontos = async (desconto, autorizado) => {
    const data = {
      registro: desconto,
      cod_origem: 2,
      origem: "DESCONTOS_LOJAS",
      usuario: auth.user.login,
      autorizado: autorizado,
    };

    messageApi.open({
      key,
      type: "loading",
      content: "Aguarde...",
    });

    try {
      const response = await Api.post("/descontos", data);
      messageApi.open({
        key,
        type: "success",
        content: response.data.message,
        duration: 2,
        onClose: () => props.getDescontos(),
      });
    } catch (error) {
      messageApi.open({
        key,
        type: "error",
        content: error.response.data.message,
        duration: 2,
        onClose: () => props.getDescontos(),
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
            <span>Desconto de Prevendas</span>
            <span>
              Aprovação de desconto em prevenda solicitado pelas lojas
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
                <span>Movimento</span>
                <span>{record.data}</span>
              </div>
            </ContainerObservacoesDetalhes>
            <Divider orientation="center"></Divider>
            <ContainerObservacoesDetalhes>
              <div>
                <span>Total Bruto</span>
                <span>{record.total_bruto}</span>
              </div>
              <div>
                <span>Desconto Comercial</span>
                <span>{record.desconto_comercial}</span>
              </div>
            </ContainerObservacoesDetalhes>
            <Divider />
            <ContainerObservacoesDetalhes>
              <div>
                <span>Total Líquido</span>
                <span>{record.valor}</span>
              </div>
              <div>
                <span>Desconto Solicitado</span>
                <span>{record.desconto}</span>
              </div>
            </ContainerObservacoesDetalhes>
            <Divider />
            <ContainerObservacoesDetalhes>
              <div>
                <span>Valor Líquido</span>
                <span>{record.valor_liquido}</span>
              </div>
              <div>
                <span>Desconto Total</span>
                <span>{record.desconto_total}</span>
              </div>
            </ContainerObservacoesDetalhes>
            <Divider />
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
                onClick={() => postDescontos(record.registro, 1)}
              >
                Aprovar
              </Button>
              <Button
                icon={<CloseCircleOutlined />}
                iconPosition="end"
                style={{
                  padding: "0px 10px",
                }}
                onClick={() => postDescontos(record.registro, 2)}
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

export default TableAprovacoesDescontos;
