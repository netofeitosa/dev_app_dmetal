import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

import Login from "../pages/Login";
import Aprovacoes from "../pages/Aprovacoes";
import Reports from "../pages/Reports";
import User from "../pages/User";
import AprovacoesDespesas from "../pages/AprovacoesDespesas";
import AprovacoesDescontos from "../pages/AprovacoesDescontos";
import AprovacoesCancelamentos from "../pages/AprovacoesCancelamentos";
import AprovacoesSaidas from "../pages/AprovacoesSaidas";
import ReportsComercial from "../pages/ReportsComercial";
import ReportsComercialLojas from "../pages/ReportsComercialLojas";
import ReportsIndustrial from "../pages/ReportsIndustrial";
import ReportsComercialRepresentantes from "../pages/ReportsComercialRepresentantes";
import VendasVsCupom from "../pages/ReportsComercialLojas/VendasVsCupom";
import VendasLojas from "../pages/ReportsComercialLojas/VendasLojas";
import VendasGerais from "../pages/ReportsComercialLojas/VendasGerais";
import EstoqueGeral from "../pages/ReportsComercialLojas/EstoqueGeral";
import AnaliseReferencias from "../pages/ReportsIndustrial/AnaliseReferencias";
import AnaliseReferenciasResult from "../pages/ReportsIndustrial/AnaliseReferencias/AnaliseReferenciasResult";
import PageBase from "../pages/PageBase";
import PageBaseBack from "../pages/PageBaseBack";

import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    if (location.pathname === "/analisereferenciasresult") {
      body.classList.add("allow-landscape");
    } else {
      body.classList.remove("allow-landscape");
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" load element={<Login />}></Route>

        <Route path="/" element={<PageBase />}>
          <Route
            path="/aprovacoes"
            element={
              <RequireAuth>
                <Aprovacoes />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/relatorios"
            element={
              <RequireAuth>
                <Reports />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="/" element={<PageBaseBack />}>
          <Route
            path="/perfil"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/despesas"
            element={
              <RequireAuth>
                <AprovacoesDespesas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/descontos"
            element={
              <RequireAuth>
                <AprovacoesDescontos />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/cancelamentos"
            element={
              <RequireAuth>
                <AprovacoesCancelamentos />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/saidasavulsas"
            element={
              <RequireAuth>
                <AprovacoesSaidas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/comercial"
            element={
              <RequireAuth>
                <ReportsComercial />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/comerciallojas"
            element={
              <RequireAuth>
                <ReportsComercialLojas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/comercialrepresentantes"
            element={
              <RequireAuth>
                <ReportsComercialRepresentantes />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/industrial"
            element={
              <RequireAuth>
                <ReportsIndustrial />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/vendasxcupom"
            element={
              <RequireAuth>
                <VendasVsCupom />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/vendaslojas"
            element={
              <RequireAuth>
                <VendasLojas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/vendasgerais"
            element={
              <RequireAuth>
                <VendasGerais />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/estoquegeral"
            element={
              <RequireAuth>
                <EstoqueGeral />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/analisereferencias"
            element={
              <RequireAuth>
                <AnaliseReferencias />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/analisereferenciasresult"
            element={
              <RequireAuth>
                <AnaliseReferenciasResult />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
