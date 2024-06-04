import {
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_AUDIENCE,
} from "../env";

export function getConfig() {
  const audience = REACT_APP_AUTH0_AUDIENCE;

  return {
    domain: REACT_APP_AUTH0_DOMAIN,
    clientId: REACT_APP_AUTH0_CLIENT_ID,
    ...(audience ? { audience } : null),
  };
}
