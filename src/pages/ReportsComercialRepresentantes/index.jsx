import React from "react";
import { Divider } from "antd";

import {
  HiMiniChevronRight,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";

import {
  Container,
  Section,
  SectionCol1,
  SectionCol2,
  SectionDivider,
  SectionLine,
} from "./reportscomercialrepresentantes.style";

const ReportsComercialRepresentantes = () => {
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
            <span>Dmetal</span>
          </SectionCol1>
          <SectionCol2>
            <HiMiniChevronRight size={24} />
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlinePresentationChartBar size={25} />
            <span>Chica Fulô</span>
          </SectionCol1>
          <SectionCol2>
            <HiMiniChevronRight size={24} />
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlinePresentationChartBar size={25} />
            <span>Solicitação de Faturamento</span>
          </SectionCol1>
          <SectionCol2>
            <HiMiniChevronRight size={24} />
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default ReportsComercialRepresentantes;
