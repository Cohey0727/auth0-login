import React, { useEffect } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const Auth: React.FC = ({ children }) => {
  return (
    <Auth0Provider
      domain="cohey0727.auth0.com"
      clientId="oBOtNegUVEPhQKigXJ0By2in3kFuzD20"
      redirectUri={window.location.origin}
    >
      <AuthWrapper>{children}</AuthWrapper>
    </Auth0Provider>
  );
};

export default Auth;

const AuthWrapper: React.FC = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0();
  console.debug({ user, isAuthenticated, isLoading });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) loginWithRedirect();
  }, [isLoading, isAuthenticated]);

  if (isLoading) return <div>...Loading</div>;
  return <>{isAuthenticated && children}</>;
};
