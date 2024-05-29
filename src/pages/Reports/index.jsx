import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";

import {
  Container,
  Title,
  Section,
  SectionLine,
  SectionCol1,
  SectionCol2,
  SectionDivider,
} from "./reports.style";

import {
  HiMiniChevronRight,
  HiOutlineShoppingCart,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const Reports = () => {
  const Navigate = useNavigate();
  return (
    <Container
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <Title>
        <span>Relatórios</span>
      </Title>

      <Section>
        <SectionLine>
          <SectionCol1>
            <HiOutlineShoppingCart size={25} style={{ strokeWidth: 1.5 }} />
            <span>Comercial</span>
          </SectionCol1>

          <SectionCol2>
            <HiMiniChevronRight
              size={24}
              onClick={() => [Navigate("/app_dmetal_dev/Comercial")]}
            />
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlineBuildingOffice2 size={24} style={{ strokeWidth: 1.5 }} />
            <span>Industrial</span>
          </SectionCol1>
          <SectionCol2>
            <HiMiniChevronRight
              size={24}
              onClick={() => [Navigate("/app_dmetal_dev/Industrial")]}
            />
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default Reports;
