import React, { useContext } from "react";
import AppContext from "../appContext";

const UserProfile = () => {
  const { state: { user } = {} } = useContext(AppContext);
  return (
    <div>
      <div>
        <span>{user.nickName}</span>
      </div>
      <div>
        <span>{user.userEmail}</span>
      </div>
      <div className="profile-picture"><img src={user.profilePic}></img></div>
    </div>
  );
};

export { UserProfile };
