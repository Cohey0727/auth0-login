import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth: React.FC = ({ children }) => {
  return (
    <Auth0Provider
      domain="cohey0727.auth0.com"
      clientId="oBOtNegUVEPhQKigXJ0By2in3kFuzD20"
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth;
