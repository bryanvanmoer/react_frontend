import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as usersService from "../../services/userApi";

const UserProfile = () => {
  const navigate = useNavigate();

  const getUserData = () => {
    usersService.retrieveUser().then((response) => {
      console.log(response);
      return response;
    });
  };

  const user = getUserData();
  console.log(user);

  useEffect(() => {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      navigate("/");
    }
  }, [navigate]);

  return <div> User profile </div>;
};

export default UserProfile;
