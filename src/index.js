import App from "./components/App";
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

window.addEventListener("DOMContentLoaded", function () {
  const root = createRoot(document.getElementById("app-root"));
  root.render(
    <Auth0Provider
      domain="dev-bemr1xep4uk5x8m6.eu.auth0.com"
      clientId="4Lto3bjmhtpllLGmDyE9fZIgUM7mRRDu"
      authorizationParams={{
        redirect_uri: this.window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  );
  console.info("react application loaded");
});
