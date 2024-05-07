import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.jsx";
import Layout from "./components/Layout.jsx";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Router>
   <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Layout>
     <App />
    </Layout>
   </ThemeProvider>
  </Router>
 </React.StrictMode>
);
