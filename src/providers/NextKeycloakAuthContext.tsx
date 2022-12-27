// import { KeycloakInstance } from 'keycloak-js';
import { createContext } from 'react';
import { INextKeycloakAuthContext } from '../interfaces';

export const NextKeycloakAuthContext = createContext<INextKeycloakAuthContext>({
  loading: true,
  authenticated: false,
  login: _option => {},
  logout: _option => {},
  register: _option => {},
  hasRealmRole: _option => false,
  accountManagement: () => {},
  // keycloakInstance: {} as KeycloakInstance,
});
