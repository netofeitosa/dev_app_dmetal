import React, { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Divider } from "antd";

import {
  HiMiniChevronRight,
  HiOutlinePresentationChartBar,
  HiOutlineLockClosed,
} from "react-icons/hi2";

import {
  Container,
  Section,
  SectionCol1,
  SectionCol2,
  SectionDivider,
  SectionLine,
} from "./reportscomerciallojas.style";

import { useNavigate, useOutletContext } from "react-router-dom";

const ReportsComercialLojas = () => {
  const auth = useContext(AuthContext);
  const roles = auth.user ? auth.user.roles : [];

  const Navigate = useNavigate();
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Lojas");
  }, [setPageTitle]);

  return (
    <Container
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <Section>
        <SectionLine>
          <SectionCol1>
            <HiOutlinePresentationChartBar size={25} />
            <span>Vendas x Cupom</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("vendasxcupom") || roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                onClick={() => [Navigate("/vendasxcupom")]}
              />
            ) : (
              <HiOutlineLockClosed size={20} style={{ strokeWidth: 2 }} />
            )}
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlinePresentationChartBar size={24} />
            <span>Vendas Gerais</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("vendasgerais") || roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                onClick={() => [Navigate("/vendasgerais")]}
              />
            ) : (
              <HiOutlineLockClosed size={20} style={{ strokeWidth: 2 }} />
            )}
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlinePresentationChartBar size={24} />
            <span>Vendas Lojas</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("vendaslojas") || roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                onClick={() => [Navigate("/vendaslojas")]}
              />
            ) : (
              <HiOutlineLockClosed size={20} style={{ strokeWidth: 2 }} />
            )}
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlinePresentationChartBar size={24} />
            <span>Estoque Geral</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("estoquegeral") || roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                onClick={() => [Navigate("/estoquegeral")]}
              />
            ) : (
              <HiOutlineLockClosed size={20} style={{ strokeWidth: 2 }} />
            )}
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default ReportsComercialLojas;
