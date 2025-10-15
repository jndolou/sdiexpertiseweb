import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccueilMobile } from "./screens/AccueilMobile";
import { MetierMobile } from "./screens/MetierMobile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AccueilMobile />} />
        <Route path="/metier" element={<MetierMobile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
