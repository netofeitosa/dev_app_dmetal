import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { HiOutlineUserCircle } from "react-icons/hi2";

import logoPreta from "../../assets/logoPreta.svg";

import { ContainerHeader, NavHeader } from "./header.style";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <ContainerHeader>
      <NavHeader>
        <img src={logoPreta} alt="Logo" width="95" />

        <Link to="/Perfil">
          {!auth.user?.image_url ? (
            <HiOutlineUserCircle
              size={32}
              style={{ color: "var(--text)", strokeWidth: 1.4 }}
            />
          ) : (
            <img
              src={auth.user?.image_url}
              width={34}
              height={34}
              style={{ borderRadius: "50%" }}
            />
          )}
        </Link>
      </NavHeader>
    </ContainerHeader>
  );
};
export default Header;
