import { useNextKeycloakAuth } from '@krashnakant/next-keycloak';

const ProfilePage = () => {
  const { userInfo, loading, token, logout, hasRealmRole } = useNextKeycloakAuth();
  console.log('profile rendered');

  return (
    <div>
      <h1>Profile</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>
            {userInfo.name}&nbsp;{userInfo.family}
          </h3>
          <h3>{userInfo.email}</h3>
          <h3>{userInfo.sub}</h3>
          <h3>{token}</h3>
          <h3>{hasRealmRole('app-admin') === true ? 'true' : 'false'}</h3>
          <button
            onClick={() => logout({ redirectUri: window.location.origin })}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
