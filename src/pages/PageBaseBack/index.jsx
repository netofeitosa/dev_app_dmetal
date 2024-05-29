import React, { useState } from "react";
import HeaderBack from "../../components/HeaderBack";
import Container from "../../components/Container";
import { Outlet } from "react-router-dom";

const PageBaseBack = () => {
  const [pageTitle, setPageTitle] = useState();
  return (
    <main>
      <HeaderBack description={pageTitle} />
      <Container>
        <Outlet context={{ setPageTitle }} />
      </Container>
    </main>
  );
};

export default PageBaseBack;
