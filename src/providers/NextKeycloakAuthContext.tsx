// import { KeycloakInstance } from 'keycloak-js';
import { createContext } from 'react';
import { INextKeycloakAuthContext } from '../interfaces';
import { KeycloakLoginOptions, KeycloakRegisterOptions } from 'keycloak-js';

export const NextKeycloakAuthContext = createContext<INextKeycloakAuthContext>({
  loading: true,
  authenticated: false,

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  login: (_option?: KeycloakLoginOptions) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  logout: (_option: KeycloakLoginOptions) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  register: (_option: KeycloakRegisterOptions) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  hasRealmRole: (_option: string) => false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  accountManagement: () => {},
  // keycloakInstance: {} as KeycloakInstance,
});
