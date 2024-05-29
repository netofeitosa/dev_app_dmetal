import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHeaderBack, NavHeaderBack } from "./headerback.style";

import { HiOutlineHome, HiOutlineChevronLeft } from "react-icons/hi";

const HeaderBack = (props) => {
  const navigate = useNavigate();
  return (
    <ContainerHeaderBack>
      <NavHeaderBack>
        <HiOutlineChevronLeft
          style={{ strokeWidth: 2.3 }}
          size={22}
          onClick={() => [navigate(-1)]}
        />
        <span>{props.description}</span>
        <HiOutlineHome
          size={28}
          style={{ strokeWidth: 1.7 }}
          onClick={() => [navigate("/app_dmetal_dev/aprovacoes")]}
        />
      </NavHeaderBack>
    </ContainerHeaderBack>
  );
};
export default HeaderBack;
