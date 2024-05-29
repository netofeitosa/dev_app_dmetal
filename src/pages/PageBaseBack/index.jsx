import React from "react";
import HeaderBack from "../../components/HeaderBack";
import Container from "../../components/Container";
import { Outlet } from "react-router-dom";

const PageBaseBack = (props) => {
  return (
    <main>
      <HeaderBack description={props.description} />
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default PageBaseBack;
