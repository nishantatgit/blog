import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { globalStrings } from "../constants/strings";

const LoginButton = ({buttonLabel = globalStrings.loginButtonLabel}) => {
    const { loginWithRedirect } = useAuth0();

    return <button className="btn btn-primary" onClick={() => loginWithRedirect()}>{buttonLabel}</button>
}

export { LoginButton }