import React, { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
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
} from "./reportscomercial.style";

import { useNavigate, useOutletContext } from "react-router-dom";

const ReportsComercial = () => {
  const auth = useContext(AuthContext);
  const rolesArray = auth.user ? auth.user.roles : [];
  const roles = rolesArray?.map((role) => role.name) || [];

  const Navigate = useNavigate();
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Comercial");
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
            <span>Comparativo de Vendas</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                onClick={() => [Navigate("/comparativovendas")]}
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

export default ReportsComercial;
