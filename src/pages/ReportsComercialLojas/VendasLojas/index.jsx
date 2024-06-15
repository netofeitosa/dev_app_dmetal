import React, { useEffect, useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useApi } from "../../../hooks/useApi";
import ChartVendasLojas from "../../../components/Charts/ChartVendasLojas";
import TableVendasLojas from "../../../components/Charts/TableVendasLojas";
import {
  Chart,
  ChartResume,
  Resume,
  ResumeCard,
  ResumeCardItens,
  ResumeCardItensCol,
  ResumeCardItensInd,
  ResumeCardItensPM,
  ResumeCardTitle,
  Section,
  SectionDivider,
  Table,
} from "./vendaslojas.style";
import { Col, Divider, FloatButton, Row } from "antd";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";

const VendasLojas = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Vendas Lojas");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const [response] = await api.getVendasLojas();
        setDados(response);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  function NumberFormated(value) {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(1) + "B";
    } else if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K";
    } else {
      return value.toFixed(0);
    }
  }

  function NumberFormatedBR(value) {
    return parseFloat(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return !removeLoading ? (
    <Spinner />
  ) : (
    <Section>
      <ChartResume
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1 }}
      >
        <Chart>
          <ChartVendasLojas dados={dados} />
        </Chart>
      </ChartResume>
      <SectionDivider
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1, delay: 0.1 }}
      >
        <Divider orientation="center" plain>
          Resumo
        </Divider>
      </SectionDivider>
      <Resume>
        <ResumeCard
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <ResumeCardTitle>
            <span>Vendas Dia</span>
          </ResumeCardTitle>
          <ResumeCardItens>
            <Row>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_dia_atacado)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.venda_dia_atacado -
                        dados.venda_dia_anterior_atacado <
                      0
                    }
                  >
                    {dados.venda_dia_atacado -
                      dados.venda_dia_anterior_atacado <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}

                    {NumberFormated(
                      dados.venda_dia_atacado -
                        dados.venda_dia_anterior_atacado <
                        0
                        ? (dados.venda_dia_atacado -
                            dados.venda_dia_anterior_atacado) *
                            -1
                        : dados.venda_dia_atacado -
                            dados.venda_dia_anterior_atacado
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Atacado</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_dia_varejo)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.venda_dia_varejo - dados.venda_dia_anterior_varejo <
                      0
                    }
                  >
                    {dados.venda_dia_varejo - dados.venda_dia_anterior_varejo <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_dia_varejo - dados.venda_dia_anterior_varejo <
                        0
                        ? (dados.venda_dia_varejo -
                            dados.venda_dia_anterior_varejo) *
                            -1
                        : dados.venda_dia_varejo -
                            dados.venda_dia_anterior_varejo
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Varejo</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_dia_ecommerce)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.venda_dia_ecommerce -
                        dados.venda_dia_anterior_ecommerce <
                      0
                    }
                  >
                    {dados.venda_dia_ecommerce -
                      dados.venda_dia_anterior_ecommerce <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_dia_ecommerce -
                        dados.venda_dia_anterior_ecommerce <
                        0
                        ? (dados.venda_dia_ecommerce -
                            dados.venda_dia_anterior_ecommerce) *
                            -1
                        : dados.venda_dia_ecommerce -
                            dados.venda_dia_anterior_ecommerce
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Site</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_dia)}</span>
                  <ResumeCardItensInd
                    $isNegative={dados.venda_dia - dados.venda_dia_anterior < 0}
                  >
                    {dados.venda_dia - dados.venda_dia_anterior < 0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_dia - dados.venda_dia_anterior < 0
                        ? (dados.venda_dia - dados.venda_dia_anterior) * -1
                        : dados.venda_dia - dados.venda_dia_anterior
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Total</span>
                </ResumeCardItensCol>
              </Col>
            </Row>
          </ResumeCardItens>
        </ResumeCard>
        <ResumeCard
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <ResumeCardTitle>
            <span>Vendas Mês</span>
          </ResumeCardTitle>
          <ResumeCardItens>
            <Row>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_mes_atacado)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.venda_mes_atacado -
                        dados.venda_mes_anterior_atacado <
                      0
                    }
                  >
                    {dados.venda_mes_atacado -
                      dados.venda_mes_anterior_atacado <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_mes_atacado -
                        dados.venda_mes_anterior_atacado <
                        0
                        ? (dados.venda_mes_atacado -
                            dados.venda_mes_anterior_atacado) *
                            -1
                        : dados.venda_mes_atacado -
                            dados.venda_mes_anterior_atacado
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Atacado</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_mes_varejo)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.venda_mes_varejo - dados.venda_mes_anterior_varejo <
                      0
                    }
                  >
                    {dados.venda_mes_varejo - dados.venda_mes_anterior_varejo <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_mes_varejo - dados.venda_mes_anterior_varejo <
                        0
                        ? (dados.venda_mes_varejo -
                            dados.venda_mes_anterior_varejo) *
                            -1
                        : dados.venda_mes_varejo -
                            dados.venda_mes_anterior_varejo
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Varejo</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_mes_ecommerce)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.venda_mes_ecommerce -
                        dados.venda_mes_anterior_ecommerce <
                      0
                    }
                  >
                    {dados.venda_mes_ecommerce -
                      dados.venda_mes_anterior_ecommerce <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_mes_ecommerce -
                        dados.venda_mes_anterior_ecommerce <
                        0
                        ? (dados.venda_mes_ecommerce -
                            dados.venda_mes_anterior_ecommerce) *
                            -1
                        : dados.venda_mes_ecommerce -
                            dados.venda_mes_anterior_ecommerce
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Site</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.venda_mes)}</span>
                  <ResumeCardItensInd
                    $isNegative={dados.venda_mes - dados.venda_mes_anterior < 0}
                  >
                    {dados.venda_mes - dados.venda_mes_anterior < 0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.venda_mes - dados.venda_mes_anterior < 0
                        ? (dados.venda_mes - dados.venda_mes_anterior) * -1
                        : dados.venda_mes - dados.venda_mes_anterior
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Total</span>
                </ResumeCardItensCol>
              </Col>
            </Row>
          </ResumeCardItens>
        </ResumeCard>
        <ResumeCard
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <ResumeCardTitle>
            <span>Peças</span>
          </ResumeCardTitle>
          <ResumeCardItens>
            <Row>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.quant_pcs_mes_atacado)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.quant_pcs_mes_atacado -
                        dados.quant_pcs_mes_anterior_atacado <
                      0
                    }
                  >
                    {dados.quant_pcs_mes_atacado -
                      dados.quant_pcs_mes_anterior_atacado <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.quant_pcs_mes_atacado -
                        dados.quant_pcs_mes_anterior_atacado <
                        0
                        ? (dados.quant_pcs_mes_atacado -
                            dados.quant_pcs_mes_anterior_atacado) *
                            -1
                        : dados.quant_pcs_mes_atacado -
                            dados.quant_pcs_mes_anterior_atacado
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Atacado</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.quant_pcs_mes_varejo)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.quant_pcs_mes_varejo -
                        dados.quant_pcs_mes_anterior_varejo <
                      0
                    }
                  >
                    {dados.quant_pcs_mes_varejo -
                      dados.quant_pcs_mes_anterior_varejo <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.quant_pcs_mes_varejo -
                        dados.quant_pcs_mes_anterior_varejo <
                        0
                        ? (dados.quant_pcs_mes_varejo -
                            dados.quant_pcs_mes_anterior_varejo) *
                            -1
                        : dados.quant_pcs_mes_varejo -
                            dados.quant_pcs_mes_anterior_varejo
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Varejo</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.quant_pcs_mes_ecommerce)}</span>
                  <ResumeCardItensInd
                    $isNegative={
                      dados.quant_pcs_mes_ecommerce -
                        dados.quant_pcs_mes_anterior_ecommerce <
                      0
                    }
                  >
                    {dados.quant_pcs_mes_ecommerce -
                      dados.quant_pcs_mes_anterior_ecommerce <
                    0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.quant_pcs_mes_ecommerce -
                        dados.quant_pcs_mes_anterior_ecommerce <
                        0
                        ? (dados.quant_pcs_mes_ecommerce -
                            dados.quant_pcs_mes_anterior_ecommerce) *
                            -1
                        : dados.quant_pcs_mes_ecommerce -
                            dados.quant_pcs_mes_anterior_ecommerce
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Site</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={6}>
                <ResumeCardItensCol>
                  <span>{NumberFormated(dados.pcs_mes)}</span>
                  <ResumeCardItensInd
                    $isNegative={dados.pcs_mes - dados.pcs_mes_anterior < 0}
                  >
                    {dados.pcs_mes - dados.pcs_mes_anterior < 0 ? (
                      <HiMiniChevronDown />
                    ) : (
                      <HiMiniChevronUp />
                    )}
                    {NumberFormated(
                      dados.pcs_mes - dados.pcs_mes_anterior < 0
                        ? (dados.pcs_mes - dados.pcs_mes_anterior) * -1
                        : dados.pcs_mes - dados.pcs_mes_anterior
                    )}
                  </ResumeCardItensInd>
                  <Divider />
                  <span>Total</span>
                </ResumeCardItensCol>
              </Col>
            </Row>
          </ResumeCardItens>
        </ResumeCard>
        <ResumeCard
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.1, delay: 0.3 }}
        >
          <ResumeCardTitle>
            <span>Preço Médio</span>
          </ResumeCardTitle>
          <ResumeCardItens>
            <Row>
              <Col span={8}>
                <ResumeCardItensCol>
                  <ResumeCardItensPM>
                    {NumberFormatedBR(dados.pm_atacado)}
                  </ResumeCardItensPM>
                  <Divider />
                  <span>Atacado</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={8}>
                <ResumeCardItensCol>
                  <ResumeCardItensPM>
                    {NumberFormatedBR(dados.pm_varejo)}
                  </ResumeCardItensPM>
                  <Divider />
                  <span>Varejo</span>
                </ResumeCardItensCol>
              </Col>
              <Col span={8}>
                <ResumeCardItensCol>
                  <ResumeCardItensPM>
                    {NumberFormatedBR(dados.pm_ecommerce)}
                  </ResumeCardItensPM>
                  <Divider />
                  <span>Site</span>
                </ResumeCardItensCol>
              </Col>
            </Row>
          </ResumeCardItens>
        </ResumeCard>
      </Resume>
      <SectionDivider
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1, delay: 0.3 }}
      >
        <Divider orientation="center" plain>
          Detalhes
        </Divider>
      </SectionDivider>
      <Table>
        <TableVendasLojas dados={dados}></TableVendasLojas>
        <FloatButton.BackTop />
      </Table>
    </Section>
  );
};

export default VendasLojas;
