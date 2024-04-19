import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.jsx";
import Layout from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <Layout>
    <App />
   </Layout>
  </ThemeProvider>
 </React.StrictMode>
);
