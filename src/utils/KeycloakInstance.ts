import type { KeycloakConfig } from "keycloak-js";
import { isServer } from "./Util";

const Keycloak = !isServer() ? require("keycloak-js") : null;

export type Keycloak = typeof Keycloak;
// Global Keycloak instance
let keycloakInstance = Keycloak;

/**
 * @description A function to create instance of Keycloak based on proper environment (server or client)
 * @param keycloakConfig
 * @returns
 */
export const getKeycloakInstance = (
  keycloakConfig: KeycloakConfig
): Keycloak | undefined => {
  const isServerSide = isServer();

  if (isServerSide) {
    return undefined;
  }

  keycloakInstance =
    typeof Keycloak.default === "function"
      ? new Keycloak.default(keycloakConfig)
      : new Keycloak(keycloakConfig);

  return keycloakInstance;
};
