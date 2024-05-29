import React, { useLayoutEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Divider } from "antd";

import {
  HiMiniChevronRight,
  HiOutlineBuildingStorefront,
  HiOutlineUsers,
} from "react-icons/hi2";

import {
  Container,
  Section,
  SectionCol1,
  SectionCol2,
  SectionDivider,
  SectionLine,
} from "./reportscomercial.style";

const ReportsComercial = () => {
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
            <HiOutlineBuildingStorefront
              size={25}
              style={{ strokeWidth: 1.5 }}
            />
            <span>Lojas</span>
          </SectionCol1>

          <SectionCol2>
            <HiMiniChevronRight
              size={24}
              onClick={() => [Navigate("/comerciallojas")]}
            />
          </SectionCol2>
        </SectionLine>
        <SectionDivider>
          <Divider />
        </SectionDivider>
        <SectionLine>
          <SectionCol1>
            <HiOutlineUsers size={24} style={{ strokeWidth: 1.5 }} />
            <span>Representantes</span>
          </SectionCol1>
          <SectionCol2>
            <HiMiniChevronRight
              size={24}
              onClick={() => [Navigate("/comercialrepresentantes")]}
            />
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default ReportsComercial;
