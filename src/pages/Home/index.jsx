import React from "react";
import "./styles.css";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="container-home"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <h2>Início</h2>
    </motion.div>
  );
};

export default Home;
