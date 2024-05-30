import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
      <SpeedInsights />
    </>
  );
}

export default App;
