import React, { useContext, useLayoutEffect } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import ImgCrop from "antd-img-crop";
import { TbUserEdit } from "react-icons/tb";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { Avatar, message, Upload } from "antd";

import { GoGear } from "react-icons/go";

import {
  ContainerUser,
  ContainerUserData,
  ContainerUserDataForm,
  Gear,
} from "./user.style";

const User = () => {
  const auth = useContext(AuthContext);
  const { setPageTitle } = useOutletContext();
  const api = useApi();
  const Navigate = useNavigate();
  const roles = auth.user ? auth.user.roles : [];

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  useLayoutEffect(() => {
    setPageTitle("Perfil");
  }, [setPageTitle]);

  const handleUpload = async ({ file }) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", auth.user?.id);
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
      auth.setUser({ ...auth.user, profileImage: URL.createObjectURL(file) });
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
            {!auth.user?.profileImage ? (
              <Avatar size={125} icon={<TbUserEdit />} />
            ) : (
              <img
                src={auth.user?.profileImage}
                width={125}
                //height={75}
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                alt="User Avatar"
              />
            )}
          </div>
        </Upload>
      </ImgCrop>

      <ContainerUserData>
        {/* {roles.includes("admin") && (
          <Gear>
            <GoGear
              size={20}
              style={{ strokeWidth: 0.5 }}
              onClick={() => [Navigate("/config")]}
            />
          </Gear>
        )} */}
        {auth.user.id === 2 && (
          <Gear>
            <GoGear
              size={20}
              style={{ strokeWidth: 0.5 }}
              onClick={() => [Navigate("/config")]}
            />
          </Gear>
        )}
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
