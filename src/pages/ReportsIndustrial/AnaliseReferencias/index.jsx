import React, { useEffect, useLayoutEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useApi } from "../../../hooks/useApi";

import { Select, Form, Button } from "antd";

import {
  Resume,
  ResumeCard,
  ResumeForm,
  ResumeCardTitle,
  Section,
} from "./analisereferencias.style";

const AnaliseReferencias = () => {
  const [colecao, setColecao] = useState();
  const [mix, setMix] = useState();
  const [grupo, setGrupo] = useState();
  const [button, setButton] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false); //alterar
  const { setPageTitle } = useOutletContext();
  const api = useApi();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    setPageTitle("Análise de Referências");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const colecoes = await api.getReferenciasColecoes();
        setColecao(colecoes);
        const mix = await api.getReferenciasMix();
        setMix(mix);
        const grupo = await api.getReferenciasGrupos();
        setGrupo(grupo);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  async function onFinish(values) {
    setButton(true);
    try {
      const [response] = await api.postAnalisereferencias(values);
      setButton(false);
      navigate("/analisereferenciasresult", { state: response });
    } catch (error) {
      console.log(error.response.data.message);
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
              <Form.Item
                name="colecao"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Favor informar a coleção",
                  },
                ]}
              >
                <Select
                  size="large"
                  placeholder="Coleção"
                  options={colecao?.map((item) => ({
                    value: item.cod_colecao,
                    label: item.colecao,
                  }))}
                />
              </Form.Item>

              <Form.Item
                name="grupo"
                normalize={(value) => (value?.length ? value : null)}
              >
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Grupo"
                  options={grupo?.map((item) => ({
                    value: item.cod_grupo,
                    label: item.grupo,
                  }))}
                />
              </Form.Item>

              <Form.Item
                name="mix"
                normalize={(value) => (value?.length ? value : null)}
              >
                <Select
                  size="large"
                  mode="multiple"
                  placeholder="Mix"
                  options={mix?.map((item) => ({
                    value: item.cod_mix_modelo,
                    label: item.mix_modelo,
                  }))}
                />
              </Form.Item>

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
            </Form>
          </ResumeForm>
        </ResumeCard>
      </Resume>
    </Section>
  );
};

export default AnaliseReferencias;
