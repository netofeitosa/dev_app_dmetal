import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";

import logoPreta from "../../assets/logoPreta.svg";
import { ContainerHeader, NavHeader } from "./header.style";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <ContainerHeader>
      <NavHeader>
        <img src={logoPreta} alt="Logo" width="95" />
        <Link to="/Perfil">
          {auth.user?.profileImage ? (
            <img
              src={auth.user?.profileImage}
              width={34}
              height={34}
              style={{
                borderRadius: "50%",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              alt="User Avatar"
            />
          ) : (
            <Avatar size={32} icon={<UserOutlined />} />
            // <HiOutlineUserCircle
            //   size={32}
            //   style={{ color: "var(--text)", strokeWidth: 1.4 }}
            // />
          )}
        </Link>
      </NavHeader>
    </ContainerHeader>
  );
};
export default Header;
