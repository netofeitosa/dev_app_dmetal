import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { AuthProvider } from "./contexts/Auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
