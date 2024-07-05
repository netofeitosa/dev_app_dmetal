import React, { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Avatar, Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import { TbUserEdit } from "react-icons/tb";
import { useOutletContext } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

import {
  ContainerUser,
  ContainerUserData,
  ContainerUserDataForm,
} from "./user.style";

const User = () => {
  const auth = useContext(AuthContext);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  useLayoutEffect(() => {
    setPageTitle("Perfil");
  }, [setPageTitle]);

  const handleUpload = async ({ file }) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("login", auth.user?.login);

    messageApi.open({
      key,
      type: "loading",
      content: "Aguarde...",
    });

    const response = await api.postImage(formData);

    if (response.message) {
      messageApi.open({
        key,
        type: "success",
        content: response.message,
        duration: 2,
      });
      auth.setUser({ ...auth.user, image_url: URL.createObjectURL(file) });
    } else {
      messageApi.open({
        key,
        type: "error",
        content: "Erro ao enviar imagem",
        duration: 2,
      });
    }
  };

  return (
    <ContainerUser
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      {contextHolder}
      <ImgCrop>
        <Upload customRequest={handleUpload} showUploadList={false}>
          <div>
            {!auth.user?.image_url ? (
              <Avatar size={75} icon={<TbUserEdit />} />
            ) : (
              <img src={auth.user?.image_url} alt="User Avatar" />
            )}
          </div>
        </Upload>
      </ImgCrop>
      <ContainerUserData>
        <ContainerUserDataForm>
          <span>Nome</span>
          <span>{auth.user?.nome}</span>
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
