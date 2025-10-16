import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccueilMobile } from "./screens/AccueilMobile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccueilMobile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
