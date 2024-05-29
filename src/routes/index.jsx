import React from "react";
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
import PageBase from "../pages/PageBase";
import PageBaseBack from "../pages/PageBaseBack";

import { AnimatePresence } from "framer-motion";

const AppRouter = () => {
  const location = useLocation();
  const decodedPath = decodeURIComponent(location.pathname.split("/").pop());

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/app_dmetal_dev" load element={<Login />}></Route>

        <Route path="/" element={<PageBase />}>
          <Route
            path="/app_dmetal_dev/aprovacoes"
            element={
              <RequireAuth>
                <Aprovacoes />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/relatorios"
            element={
              <RequireAuth>
                <Reports />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="/" element={<PageBaseBack description={decodedPath} />}>
          <Route
            path="/app_dmetal_dev/Perfil"
            element={
              <RequireAuth>
                <User />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Despesas"
            element={
              <RequireAuth>
                <AprovacoesDespesas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Descontos"
            element={
              <RequireAuth>
                <AprovacoesDescontos />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Cancelamentos"
            element={
              <RequireAuth>
                <AprovacoesCancelamentos />
              </RequireAuth>
            }
          ></Route>
          <Route
            path={`/app_dmetal_dev/Saídas Avulsas`}
            element={
              <RequireAuth>
                <AprovacoesSaidas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Comercial"
            element={
              <RequireAuth>
                <ReportsComercial />
              </RequireAuth>
            }
          ></Route>
          <Route
            path={`/app_dmetal_dev/Comercial Lojas`}
            element={
              <RequireAuth>
                <ReportsComercialLojas />
              </RequireAuth>
            }
          ></Route>
          <Route
            path={`/app_dmetal_dev/Comercial Representantes`}
            element={
              <RequireAuth>
                <ReportsComercialRepresentantes />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Industrial"
            element={
              <RequireAuth>
                <ReportsIndustrial />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/app_dmetal_dev/Vendas x Cupom"
            element={
              <RequireAuth>
                <VendasVsCupom />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
