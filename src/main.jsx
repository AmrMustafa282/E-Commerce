import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.jsx";
import Layout from "./components/Layout.jsx";
import App from "./App";
import { Provider } from "react-redux";
import store from "./rtk/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Provider store={store}>
            <App />
          </Provider>
        </Layout>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
