import React, { useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";

const AddUsers = () => {
  const { setPageTitle } = useOutletContext();
  useLayoutEffect(() => {
    setPageTitle("Adicionar Usuário");
  }, [setPageTitle]);
  return <></>;
};

export default AddUsers;
