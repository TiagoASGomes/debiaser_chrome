import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getConfig } from "./config";
import { Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";
import "./index.css";

const config = getConfig();

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain as string,
  clientId: config.clientId as string,
  cacheLocation: "localstorage",
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <Auth0Provider {...providerConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
