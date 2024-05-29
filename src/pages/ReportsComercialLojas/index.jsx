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
} from "./reportscomerciallojas.style";
import { useNavigate } from "react-router-dom";

const ReportsComercialLojas = () => {
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
            <span>Vendas x Cupom</span>
          </SectionCol1>
          <SectionCol2>
            <HiMiniChevronRight
              size={24}
              onClick={() => [Navigate(`/app_dmetal_dev/Vendas x Cupom`)]}
            />
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
            <HiMiniChevronRight size={24} />
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
            <HiMiniChevronRight size={24} />
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
            <HiMiniChevronRight size={24} />
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default ReportsComercialLojas;
