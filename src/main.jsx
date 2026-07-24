import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics";
import PortfolioBot from "./PortfolioBot.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioBot />
    <Analytics />
  </React.StrictMode>
);
