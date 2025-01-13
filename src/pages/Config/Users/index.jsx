import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";

import {
  Container,
  Section,
  SectionCol1,
  SectionCol2,
  SectionDivider,
  SectionLine,
  Title,
  AddUser,
} from "./users.style";

import Spinner from "../../../components/Spinner";
import { HiMiniChevronRight, HiOutlineUserPlus } from "react-icons/hi2";
import { TbUserPlus } from "react-icons/tb";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider } from "antd";

const Users = () => {
  const [users, setUsers] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();
  const Navigate = useNavigate();

  useLayoutEffect(() => {
    setPageTitle("Usuários");
  }, [setPageTitle]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.getUsers();
        const usersWithImages = await Promise.all(
          response.map(async (user) => {
            try {
              const imageBlob = await api.getImage(user.token);
              const profileImageUrl =
                imageBlob && imageBlob.size > 0
                  ? URL.createObjectURL(imageBlob)
                  : null;
              return { ...user, profileImage: profileImageUrl };
            } catch (error) {
              console.error(
                `Erro ao carregar a imagem para ${user.nome}:`,
                error
              );
              return { ...user, profileImage: null };
            }
          })
        );
        setUsers(usersWithImages);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      } finally {
        setRemoveLoading(true);
      }
    };
    getUsers();
  }, []);

  return (
    <Container
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      {!removeLoading ? (
        <Spinner />
      ) : (
        <>
          <AddUser>
            <Avatar
              size={32}
              icon={<TbUserPlus />}
              onClick={() => [Navigate("/addusers")]}
            />
          </AddUser>
          <Section>
            {users?.map((user, index) => (
              <React.Fragment key={user.id || index}>
                <SectionLine>
                  <SectionCol1>
                    {user.profileImage ? (
                      <img
                        src={user?.profileImage}
                        width={28}
                        height={28}
                        style={{
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <Avatar size={28} icon={<UserOutlined />} />
                    )}
                    <span>{user.nome}</span>
                  </SectionCol1>
                  <SectionCol2>
                    <HiMiniChevronRight size={24} />
                  </SectionCol2>
                </SectionLine>
                {index < users.length - 1 && (
                  <SectionDivider>
                    <Divider />
                  </SectionDivider>
                )}
              </React.Fragment>
            ))}
          </Section>
        </>
      )}
    </Container>
  );
};

export default Users;
