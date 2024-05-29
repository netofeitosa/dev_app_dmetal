import { Flex, Spin } from "antd";
import React from "react";

const Spinner = () => {
  return (
    <Flex style={{ minHeight: "50vh" }} justify={"center"} align={"center"}>
      <Spin size="large" />
    </Flex>
  );
};

export default Spinner;
