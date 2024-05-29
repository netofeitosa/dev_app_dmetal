import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Avatar } from "antd";
import { TbUserEdit } from "react-icons/tb";

import {
  ContainerUser,
  ContainerUserData,
  ContainerUserDataForm,
} from "./user.style";

const User = () => {
  const auth = useContext(AuthContext);

  return (
    <ContainerUser
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <div>
        {!auth.user?.image ? (
          <Avatar size={65} icon={<TbUserEdit />} />
        ) : (
          <img src={auth.user?.image} />
        )}
      </div>
      <ContainerUserData>
        <ContainerUserDataForm>
          <span>Nome</span>
          <span>{auth.user.nome}</span>
        </ContainerUserDataForm>
        <ContainerUserDataForm>
          <span>Usuário</span>
          <span>{auth.user?.login}</span>
        </ContainerUserDataForm>
      </ContainerUserData>
    </ContainerUser>
  );
};

export default User;
