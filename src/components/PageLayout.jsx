import React, { useContext, useEffect } from "react";
import "./Pagelayout.css";
import { UserProfile } from "./UserProfile";
import { LoginButton } from "./LoginButton";
import AppContext from "../appContext";
import { useAuth0 } from "@auth0/auth0-react";
import { setUserProfile } from "../actions";

function PageLayout({ children }) {
  const { state, dispatch } = useContext(AppContext);
  const userData = useAuth0();

  useEffect(() => {
    dispatch(setUserProfile(userData));
  },[userData]);
  
  console.log("user data ", userData);
 
  return (
    <div className="container-xxl mt-4">
        {console.log("state.user.loggedIn ", state.user.loggedIn)}
      <nav>{state.user.loggedIn ? <UserProfile /> : <LoginButton/>}</nav>
      {children}
    </div>
  );
}

export default PageLayout;
