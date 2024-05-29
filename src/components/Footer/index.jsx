import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Col, Row } from "antd";

import { ContainerFooter, ContainerFooterLink } from "./footer.style";

import {
  HiHandThumbUp,
  HiOutlineHandThumbUp,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChartBarSquare,
  HiChartBarSquare,
} from "react-icons/hi2";

const Footer = () => {
  const [paginaAtiva, setPaginaAtiva] = useState("");
  const auth = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname.replace("/app_dmetal_dev/", "");
    setPaginaAtiva(pathname);
  }, [location]);

  const handleLogout = () => {
    auth.signout();
    navigate("/app_dmetal_dev");
  };

  return (
    <ContainerFooter>
      <Row>
        <Col span={8}>
          <Link to={"/app_dmetal_dev/aprovacoes"}>
            <ContainerFooterLink>
              {paginaAtiva === "aprovacoes" ? (
                <div style={{ color: "#582183" }}>
                  <HiHandThumbUp size={30} />
                  <span>Aprovações</span>
                </div>
              ) : (
                <div>
                  <HiOutlineHandThumbUp
                    size={30}
                    style={{ strokeWidth: 1.3 }}
                  />
                  <span>Aprovações</span>
                </div>
              )}
            </ContainerFooterLink>
          </Link>
        </Col>
        <Col span={8}>
          <Link to={"/app_dmetal_dev/relatorios"}>
            <ContainerFooterLink>
              {paginaAtiva === "relatorios" ? (
                <div style={{ color: "#582183" }}>
                  <HiChartBarSquare size={30} />
                  <span>Relatórios</span>
                </div>
              ) : (
                <div>
                  <HiOutlineChartBarSquare
                    size={30}
                    style={{ strokeWidth: 1.3 }}
                  />
                  <span>Relatórios</span>
                </div>
              )}
            </ContainerFooterLink>
          </Link>
        </Col>
        <Col span={8}>
          <ContainerFooterLink onClick={handleLogout}>
            <HiOutlineArrowRightOnRectangle
              size={30}
              style={{ strokeWidth: 1.3 }}
            />
            <span>Sair</span>
          </ContainerFooterLink>
        </Col>
      </Row>
    </ContainerFooter>
  );
};

export default Footer;
