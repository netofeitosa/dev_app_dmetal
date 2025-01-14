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
  const [isLoaded, setIsLoaded] = useState(false);
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

        await loadModules();

        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };

    const loadModules = async () => {
      try {
        const momentModule = await import("moment");
        const pdfMakeModule = await import("pdfmake/build/pdfmake");
        const vfsFontsModule = await import("pdfmake/build/vfs_fonts");

        // Adiciona as bibliotecas carregadas à janela global
        window.moment = momentModule.default;
        window.pdfMake = pdfMakeModule.default;
        window.vfsFonts = vfsFontsModule.default;

        // Marcar os módulos como carregados
        setIsLoaded(true);
      } catch (error) {
        console.error("Erro ao carregar os módulos:", error);
      }
    };

    getDados();
  }, []);

  async function onFinish(values) {
    // Previne múltiplos cliques
    setButton(true);

    // Captura os dados necessários do formulário
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
      // Faz a requisição para obter os dados de vendas
      const response = await api.postVendasLojasPeriodo(responseData);

      // Gera o PDF com a resposta obtida
      if (isLoaded) {
        // Só gera o PDF se os módulos estiverem carregados
        const url = await GeneratePDFComparativoVendas(response, responseData);

        // Atualiza o estado do botão e a URL do PDF
        setButton(false);

        // Verifica se a URL foi gerada e abre a nova aba
        if (url) {
          window.open(url, "_blank");
        }
      } else {
        console.log("Os módulos ainda não foram carregados.");
      }
    } catch (error) {
      console.log(error);
      setButton(false); // Em caso de erro, libera o botão
    } finally {
      setButton(false); // Finaliza o processo
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
