import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EstiloGlobal from "./assets/EstiloGlobal/index.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EstiloGlobal />
    <Home />
  </StrictMode>,
);
