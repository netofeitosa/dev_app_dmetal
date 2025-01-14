import React, { useEffect, useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import Spinner from "../../../../components/Spinner";
import GeneratePDFComparativoVendas from "../../../../utils/GeneratePDFComparativoVendas";
import { Button, Form, Select, DatePicker, Space, Divider } from "antd";

import {
  Resume,
  ResumeCard,
  ResumeForm,
  ResumeCardTitle,
  Section,
  ResumeFilters,
  ResumeFiltersPicker,
  ResumeFiltersDivider,
  ResumeFiltersSelect,
  ResumeFiltersButton,
} from "./comparativovendas.style";

const ComparativoVendas = () => {
  const [lojas, setLojas] = useState();
  const [button, setButton] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Comparativo de Vendas");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const empresas = await api.getLojasAtivas();
        setLojas(empresas);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  async function onFinish(values) {
    setButton(true);

    const { lojas } = values;

    const responseData = {
      lojas: lojas || [],
      dataIni1: values.dataIni1.format("YYYY-MM-DD"),
      dataEnd1: values.dataEnd1.format("YYYY-MM-DD"),
      dataIni2: values.dataIni2.format("YYYY-MM-DD"),
      dataEnd2: values.dataEnd2.format("YYYY-MM-DD"),
      dataIni3: values.dataIni3 && values.dataIni3.format("YYYY-MM-DD"),
      dataEnd3: values.dataEnd3 && values.dataEnd3.format("YYYY-MM-DD"),
    };

    try {
      const response = await api.postVendasLojasPeriodo(responseData);
      await GeneratePDFComparativoVendas(response, responseData);
      setButton(false);
    } catch (error) {
      console.log(error);
    } finally {
      setButton(false);
    }
  }

  return !removeLoading ? (
    <Spinner />
  ) : (
    <Section>
      <Resume>
        <ResumeCard
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <ResumeCardTitle>
            <span>Preencha os Filtros</span>
          </ResumeCardTitle>

          <ResumeForm>
            <Form name="filter" className="filter-form" onFinish={onFinish}>
              <ResumeFiltersSelect>
                <Form.Item
                  name="lojas"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Informe uma loja",
                    },
                  ]}
                  normalize={(value) => (value?.length ? value : null)}
                >
                  <Select
                    size="large"
                    mode="multiple"
                    placeholder="Loja"
                    options={lojas?.map((item) => ({
                      value: item.empresa,
                      label: item.loja,
                    }))}
                    showSearch={false} // Desabilita a busca por texto
                    onFocus={(e) => e.preventDefault()} // Impede o foco no campo de entrada
                  />
                </Form.Item>
              </ResumeFiltersSelect>
              <ResumeFiltersDivider>
                <Divider orientation="center" plain>
                  Período 1
                </Divider>
              </ResumeFiltersDivider>

              <ResumeFilters>
                <ResumeFiltersPicker>
                  <Form.Item
                    name="dataIni1"
                    rules={[
                      {
                        required: true,
                        message: "Informe um período",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      className="custom-datepicker"
                      inputReadOnly
                      allowClear={false}
                      picker="date"
                      placement="topLeft"
                      style={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      placeholder="Início"
                    />
                  </Form.Item>

                  <Form.Item
                    name="dataEnd1"
                    rules={[
                      {
                        required: true,
                        message: "Informe um período",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("dataIni1") < value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Data menor que a inicial")
                          );
                        },
                      }),
                    ]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      inputReadOnly
                      allowClear={false}
                      picker="date"
                      placement="bottomRight"
                      style={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      placeholder="Fim"
                    />
                  </Form.Item>
                </ResumeFiltersPicker>
              </ResumeFilters>

              <ResumeFiltersDivider>
                <Divider orientation="center" plain>
                  Período 2
                </Divider>
              </ResumeFiltersDivider>

              <ResumeFilters>
                <ResumeFiltersPicker>
                  <Form.Item
                    name="dataIni2"
                    rules={[
                      {
                        required: true,
                        message: "Informe um período",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      inputReadOnly
                      allowClear={false}
                      picker="date"
                      placement="topLeft"
                      style={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      placeholder="Início"
                    />
                  </Form.Item>

                  <Form.Item
                    name="dataEnd2"
                    rules={[
                      {
                        required: true,
                        message: "Informe um período",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("dataIni2") < value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Data menor que a inicial")
                          );
                        },
                      }),
                    ]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      inputReadOnly
                      allowClear={false}
                      picker="date"
                      placement="bottomRight"
                      style={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      placeholder="Fim"
                    />
                  </Form.Item>
                </ResumeFiltersPicker>
              </ResumeFilters>

              <ResumeFiltersDivider>
                <Divider orientation="center" plain>
                  Período 3
                </Divider>
              </ResumeFiltersDivider>

              <ResumeFilters>
                <ResumeFiltersPicker>
                  <Form.Item
                    name="dataIni3"
                    rules={[
                      {
                        required: false,
                        message: "Informe um período",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      inputReadOnly
                      allowClear={false}
                      picker="date"
                      placement="topLeft"
                      style={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      placeholder="Início"
                    />
                  </Form.Item>

                  <Form.Item
                    name="dataEnd3"
                    rules={[
                      {
                        required: false,
                        message: "Informe um período",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("dataIni3") < value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Data menor que a inicial")
                          );
                        },
                      }),
                    ]}
                    style={{ width: "100%" }}
                  >
                    <DatePicker
                      inputReadOnly
                      allowClear={false}
                      picker="date"
                      placement="bottomRight"
                      style={{ width: "100%" }}
                      format="DD/MM/YYYY"
                      placeholder="Fim"
                    />
                  </Form.Item>
                </ResumeFiltersPicker>
              </ResumeFilters>

              <ResumeFiltersButton>
                <Form.Item>
                  {button ? (
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading
                    >
                      <span>Consultar</span>
                    </Button>
                  ) : (
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      <span style={{ fontSize: "14px", fontWeight: "600" }}>
                        Consultar
                      </span>
                    </Button>
                  )}
                </Form.Item>
              </ResumeFiltersButton>
            </Form>
          </ResumeForm>
        </ResumeCard>
      </Resume>
    </Section>
  );
};

export default ComparativoVendas;
