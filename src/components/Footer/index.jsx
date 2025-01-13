import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Col, Row } from "antd";

import {
  ContainerFooter,
  ContainerFooterLink,
  LinkAtivo,
  LinkInativo,
} from "./footer.style";

import {
  HiThumbUp,
  HiOutlineThumbUp,
  HiDocumentText,
  HiOutlineDocumentText,
  HiChartPie,
  HiOutlineChartPie,
  HiOutlineLogout,
} from "react-icons/hi";

const Footer = () => {
  const [paginaAtiva, setPaginaAtiva] = useState("");
  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname.replace("/", "");
    setPaginaAtiva(pathname);
  }, [location]);

  const handleLogout = () => {
    auth.signout();
    navigate("/");
  };

  return (
    <ContainerFooter>
      <Row>
        <Col span={6}>
          <Link to={"/aprovacoes"}>
            <ContainerFooterLink>
              {paginaAtiva === "aprovacoes" ? (
                <LinkAtivo
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <HiThumbUp size={30} />
                    <span>Aprovações</span>
                  </div>
                </LinkAtivo>
              ) : (
                <LinkInativo>
                  <HiOutlineThumbUp size={30} style={{ strokeWidth: 1.3 }} />
                  <span>Aprovações</span>
                </LinkInativo>
              )}
            </ContainerFooterLink>
          </Link>
        </Col>
        <Col span={6}>
          <Link to={"/dashboards"}>
            <ContainerFooterLink>
              {paginaAtiva === "dashboards" ? (
                <LinkAtivo
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <HiChartPie size={30} />
                    <span>Dashboards</span>
                  </div>
                </LinkAtivo>
              ) : (
                <LinkInativo>
                  <HiOutlineChartPie size={30} style={{ strokeWidth: 1.3 }} />
                  <span>Dashboards</span>
                </LinkInativo>
              )}
            </ContainerFooterLink>
          </Link>
        </Col>
        <Col span={6}>
          <Link to={"/reports"}>
            <ContainerFooterLink>
              {paginaAtiva === "reports" ? (
                <LinkAtivo
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <HiDocumentText size={30} />
                    <span>Relatórios</span>
                  </div>
                </LinkAtivo>
              ) : (
                <LinkInativo>
                  <HiOutlineDocumentText
                    size={30}
                    style={{ strokeWidth: 1.3 }}
                  />
                  <span>Relatórios</span>
                </LinkInativo>
              )}
            </ContainerFooterLink>
          </Link>
        </Col>
        <Col span={6}>
          <ContainerFooterLink onClick={handleLogout}>
            <LinkInativo>
              <HiOutlineLogout size={30} style={{ strokeWidth: 1.3 }} />
              <span>Sair</span>
            </LinkInativo>
          </ContainerFooterLink>
        </Col>
      </Row>
    </ContainerFooter>
  );
};

export default Footer;
