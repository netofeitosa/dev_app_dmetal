import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message } from "antd";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Spinner from "../../components/Spinner";

import {
  IoFingerPrint,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLockClosedOutline,
} from "react-icons/io5";

import logoPreta from "../../assets/logoPreta.svg";
import wave from "../../assets/wave.svg";

import {
  ContainerLogin,
  ContainerLoginHeader,
  ContainerLoginSection,
  ContainerLoginSectionForm,
  ContainerLoginSectionHeader,
  ContainerLoginSectionSocial,
  ContainerLoginWave,
} from "./login.style";

const Login = () => {
  const [button, setButton] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isLoading) {
      setLoading(true);
    } else if (auth.user) {
      navigate("/app_dmetal_dev/aprovacoes");
    } else {
      setLoading(false);
    }
  }, [auth.user, auth.isLoading, navigate]);

  async function onFinish(user, password) {
    setButton(true);
    const response = await auth.signin(user, password);
    if (!response) {
      setButton(false);
      message.error("Usuário ou senha inválidos!");
    }
  }

  return loading ? (
    <Spinner />
  ) : (
    <ContainerLogin
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.2 }}
    >
      <ContainerLoginHeader>
        <img src={logoPreta} alt="Logo" width="200" />
      </ContainerLoginHeader>

      <ContainerLoginWave>
        <img src={wave} alt="wave" />
      </ContainerLoginWave>

      <ContainerLoginSection>
        <ContainerLoginSectionHeader>
          <div>
            <span>Login</span>
            <span>Entre com as suas credenciais</span>
          </div>
          <div>
            <IoLockClosedOutline size={30} />
          </div>
        </ContainerLoginSectionHeader>
        <ContainerLoginSectionForm>
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item
              name="user"
              rules={[{ required: true, message: "Informe o seu usuário" }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Usuário"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Informe a sua senha" }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Senha"
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
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>
                    Login
                  </span>
                </Button>
              ) : (
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>
                    Login
                  </span>
                </Button>
              )}
            </Form.Item>
          </Form>
        </ContainerLoginSectionForm>
        <Divider />
        <ContainerLoginSectionSocial>
          <div>
            <a
              href="https://www.instagram.com/dmetal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={22} />
              <span>/dmetal</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/user/OficialDmetal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube size={22} />
              <span>/OficialDmetal</span>
            </a>
          </div>
        </ContainerLoginSectionSocial>
      </ContainerLoginSection>
    </ContainerLogin>
  );
};

export default Login;
