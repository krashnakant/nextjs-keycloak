import Keycloak, {
  KeycloakConfig,
  KeycloakInitOptions,
} from 'keycloak-js';
import React, { FC, useMemo } from 'react';
import { useInitKeycloak } from '../hooks/UseInitialKeycloak';

import { getKeycloakInstance } from '../utils/KeycloakInstance';
import { NextKeycloakAuthContext } from './NextKeycloakAuthContext';

interface IKeycloakAuthenticationProviderProps {
  config: KeycloakConfig;
  initOption?: KeycloakInitOptions;
  children: React.ReactNode;
}

export const NextKeycloakAuthProvider: FC<IKeycloakAuthenticationProviderProps> = ({
  children,
  config,
  initOption,
}) => {
  const keycloak = useMemo(() => {
    return getKeycloakInstance(config);
  }, [config]);
  const initializedKeycloak = useInitKeycloak(
    keycloak as Keycloak,
    initOption
  );
  return (
    <NextKeycloakAuthContext.Provider value={initializedKeycloak}>
      {children}
    </NextKeycloakAuthContext.Provider>
  );
};
