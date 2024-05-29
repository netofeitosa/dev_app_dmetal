import React from "react";
import { ContainerHeader } from "./container.style";

const Container = ({ children }) => {
  return <ContainerHeader>{children}</ContainerHeader>;
};

export default Container;
