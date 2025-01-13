import React, { useLayoutEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Divider } from "antd";

import {
  Container,
  Title,
  Section,
  SectionLine,
  SectionCol1,
  SectionCol2,
  SectionDivider,
} from "./config.style";

import { HiOutlineUsers, HiMiniChevronRight } from "react-icons/hi2";

const Config = () => {
  const Navigate = useNavigate();
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Configurações");
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
            <HiOutlineUsers size={25} style={{ strokeWidth: 1.5 }} />
            <span>Usuários</span>
          </SectionCol1>

          <SectionCol2>
            <HiMiniChevronRight
              size={24}
              onClick={() => [Navigate("/users")]}
            />
          </SectionCol2>
        </SectionLine>
      </Section>
    </Container>
  );
};

export default Config;
