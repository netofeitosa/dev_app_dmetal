import React, { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate, useOutletContext } from "react-router-dom";
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
} from "./reportsindustrial.style";

const ReportsIndustrial = () => {
  const auth = useContext(AuthContext);
  const roles = auth.user.roles;
  const Navigate = useNavigate();
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Industrial");
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
            <span>Controle de Facções</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("controlefaccoes") || roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                //onClick={() => [Navigate("/controlefaccoes")]}
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
            <HiOutlinePresentationChartBar size={25} />
            <span>Análise de Referências</span>
          </SectionCol1>
          <SectionCol2>
            {roles.includes("analisereferencias") || roles.includes("admin") ? (
              <HiMiniChevronRight
                size={24}
                onClick={() => [Navigate("/analisereferencias")]}
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

export default ReportsIndustrial;
