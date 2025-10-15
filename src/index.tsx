import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AccueilMobile } from "./screens/AccueilMobile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AccueilMobile />
  </StrictMode>,
);
