import React from "react";
import { useNavigate } from "react-router-dom";

import {
  HiMiniChevronRight,
  HiOutlinePresentationChartBar,
} from "react-icons/hi2";

import {
  Container,
  Section,
  SectionCol1,
  SectionCol2,
  SectionLine,
} from "./reportsindustrial.style";

const ReportsIndustrial = () => {
  const Navigate = useNavigate();
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
            <HiMiniChevronRight size={24} />
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default ReportsIndustrial;
