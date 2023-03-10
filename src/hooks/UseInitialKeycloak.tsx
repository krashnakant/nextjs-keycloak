import { useEffect, useState } from 'react';
import Keycloak, {
  KeycloakInitOptions,
  KeycloakLoginOptions,
  KeycloakLogoutOptions,
  KeycloakRegisterOptions,
} from 'keycloak-js';
import { INextKeycloakAuthContext } from '../interfaces';
import { getUserFromToken } from '../utils/Util';

/**
 *
 * @description A hook to initialize and provide Keycloak functionalities
 * @param keycloakInstance
 * @param initOption
 * @returns
 */
export const useInitKeycloak = (
  keycloakInstance: Keycloak,
  initOption: KeycloakInitOptions = {},
): INextKeycloakAuthContext => {
  const [keycloak, setKeycloak] = useState<Keycloak>();

  useEffect(() => {
    if (keycloakInstance) {
      initialize();
    }
  }, []);

  const initialize = async () => {
    try {
      await keycloakInstance.init(initOption);
      setKeycloak(keycloakInstance);
    } catch (e) {
      console.error('failed to initialize keycloak');
    }
  };

  const login = (option: KeycloakLoginOptions) => {
    if (keycloak) {
      return keycloak.login(option);
    }
    return undefined;
  };

  const logout = (option: KeycloakLogoutOptions) => {
    if (keycloak !== undefined) {
      return keycloak.logout(option);
    }
    return undefined;
  };

  const register = (option: KeycloakRegisterOptions) => {
    if (keycloak) {
      return keycloak.register(option);
    }
    return undefined;
  };

  const accountManagement = () => {
    if (keycloak) {
      return keycloak.accountManagement();
    }
    return undefined;
  };

  const hasRealmRole = (role: string): boolean => {
    if (keycloak) {
      return keycloak.hasRealmRole(role);
    }
    return false;
  };

  return {
    loading: !(keycloak?.authenticated && keycloak.token !== undefined),
    token: keycloak ? keycloak.token : '',
    authenticated: keycloak ? Boolean(keycloak.authenticated) : false,
    userInfo: keycloak?.authenticated
      ? getUserFromToken(String(keycloak.token))
      : undefined,
    login,
    logout,
    register,
    hasRealmRole,
    accountManagement,
    // keycloakInstance: keycloak,
  };
};
