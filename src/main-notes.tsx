import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import NotesPage from "@/pages/NotesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotesPage />
  </StrictMode>,
);
