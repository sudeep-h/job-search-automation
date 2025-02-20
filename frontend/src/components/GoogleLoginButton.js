import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = (response) => {
    console.log("Google Login Success:", response.credential);
    onSuccess(response.credential);
  };

  const handleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
