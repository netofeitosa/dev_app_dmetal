import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

// import Login from "../pages/Login";
// import Aprovacoes from "../pages/Aprovacoes";
// import Dashboards from "../pages/Dashboards";
// import Reports from "../pages/Reports";
// import User from "../pages/User";
// import Config from "../pages/Config";
// import Users from "../pages/Config/Users";
// import AddUsers from "../pages/Config/Users/AddUsers";
// import AprovacoesDespesas from "../pages/AprovacoesDespesas";
// import AprovacoesDescontos from "../pages/AprovacoesDescontos";
// import AprovacoesCancelamentos from "../pages/AprovacoesCancelamentos";
// import AprovacoesSaidas from "../pages/AprovacoesSaidas";
// import DashComercial from "../pages/DashComercial";
// import DashComercialLojas from "../pages/DashComercialLojas";
// import DashIndustrial from "../pages/DashIndustrial";
// import DashComercialRepresentantes from "../pages/DashComercialRepresentantes";
// import VendasVsCupom from "../pages/DashComercialLojas/VendasVsCupom";
// import VendasLojas from "../pages/DashComercialLojas/VendasLojas";
// import VendasGerais from "../pages/DashComercialLojas/VendasGerais";
// import EstoqueGeral from "../pages/DashComercialLojas/EstoqueGeral";
// import AnaliseReferencias from "../pages/DashIndustrial/AnaliseReferencias";
// import AnaliseReferenciasResult from "../pages/DashIndustrial/AnaliseReferencias/AnaliseReferenciasResult";
// import ReportsComercial from "../pages/Reports/ReportsComercial";
// import ComparativoVendas from "../pages/Reports/ReportsComercial/ComparativoVendas";
// import PageBase from "../pages/PageBase";
// import PageBaseBack from "../pages/PageBaseBack";

const Login = lazy(() => import("../pages/Login"));
const Aprovacoes = lazy(() => import("../pages/Aprovacoes"));
const Dashboards = lazy(() => import("../pages/Dashboards"));
const Reports = lazy(() => import("../pages/Reports"));
const User = lazy(() => import("../pages/User"));
const Config = lazy(() => import("../pages/Config"));
const Users = lazy(() => import("../pages/Config/Users"));
const AddUsers = lazy(() => import("../pages/Config/Users/AddUsers"));
const AprovacoesDespesas = lazy(() => import("../pages/AprovacoesDespesas"));
const AprovacoesDescontos = lazy(() => import("../pages/AprovacoesDescontos"));
const AprovacoesCancelamentos = lazy(() =>
  import("../pages/AprovacoesCancelamentos")
);
const AprovacoesSaidas = lazy(() => import("../pages/AprovacoesSaidas"));
const DashComercial = lazy(() => import("../pages/DashComercial"));
const DashComercialLojas = lazy(() => import("../pages/DashComercialLojas"));
const DashIndustrial = lazy(() => import("../pages/DashIndustrial"));
const DashComercialRepresentantes = lazy(() =>
  import("../pages/DashComercialRepresentantes")
);
const VendasVsCupom = lazy(() =>
  import("../pages/DashComercialLojas/VendasVsCupom")
);
const VendasLojas = lazy(() =>
  import("../pages/DashComercialLojas/VendasLojas")
);
const VendasGerais = lazy(() =>
  import("../pages/DashComercialLojas/VendasGerais")
);
const EstoqueGeral = lazy(() =>
  import("../pages/DashComercialLojas/EstoqueGeral")
);
const AnaliseReferencias = lazy(() =>
  import("../pages/DashIndustrial/AnaliseReferencias")
);
const AnaliseReferenciasResult = lazy(() =>
  import("../pages/DashIndustrial/AnaliseReferencias/AnaliseReferenciasResult")
);
const ReportsComercial = lazy(() =>
  import("../pages/Reports/ReportsComercial")
);
const ComparativoVendas = lazy(() =>
  import("../pages/Reports/ReportsComercial/ComparativoVendas")
);

const ComparativoVendasResult = lazy(() =>
  import(
    "../pages/Reports/ReportsComercial/ComparativoVendas/ComparativoVendasResult"
  )
);

const PageBase = lazy(() => import("../pages/PageBase"));
const PageBaseBack = lazy(() => import("../pages/PageBaseBack"));

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
      <Suspense fallback={<div>Loading...</div>}>
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
              path="/dashboards"
              element={
                <RequireAuth>
                  <Dashboards />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/reports"
              element={
                <RequireAuth>
                  <Reports />
                </RequireAuth>
              }
            ></Route>
          </Route>
          <Route path="/" element={<PageBaseBack />}>
            <Route
              path="/config"
              element={
                <RequireAuth>
                  <Config />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/addusers"
              element={
                <RequireAuth>
                  <AddUsers />
                </RequireAuth>
              }
            ></Route>
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
              path="/dashcomercial"
              element={
                <RequireAuth>
                  <DashComercial />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/dashcomerciallojas"
              element={
                <RequireAuth>
                  <DashComercialLojas />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/dashcomercialrepresentantes"
              element={
                <RequireAuth>
                  <DashComercialRepresentantes />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/dashindustrial"
              element={
                <RequireAuth>
                  <DashIndustrial />
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
            <Route
              path="/reportscomercial"
              element={
                <RequireAuth>
                  <ReportsComercial />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/comparativovendas"
              element={
                <RequireAuth>
                  <ComparativoVendas />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/comparativovendasresult"
              element={
                <RequireAuth>
                  <ComparativoVendasResult />
                </RequireAuth>
              }
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AppRouter;
