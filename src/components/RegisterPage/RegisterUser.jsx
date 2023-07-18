import React, { useState, useContext, useEffect } from "react";

import { Context as allContext } from "../../contexts/allContext";
import * as usersService from "../../services/userApi";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();

  const { setUsersList, usersList } = useContext(allContext);

  const [newLastname, setNewLastname] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("jwt");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLastnameChange = (e) => {
    setNewLastname(e.target.value);
  };
  const handleFirstnameChange = (e) => {
    setNewFirstname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const registerPlayer = (e) => {
    e.preventDefault();
    const playerObject = {
      lastname: newLastname,
      firstname: newFirstname,
      email: newEmail,
      password: newPassword,
    };
    usersService.create(playerObject).then((response) => {
      setUsersList(usersList.concat(response));
      console.log(response);
    });
    setNewFirstname("");
    setNewLastname("");
    setNewEmail("");
    setNewPassword("");
    navigate("/login");
  };

  return (
    <div>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-6">
              <div className="card">
                <div className="card-header">
                  <strong>Register a new account</strong>
                </div>
                <div className="card-body">
                  <form onSubmit={registerPlayer}>
                    <div className="form-group mb-2">
                      <label className="text-muted">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="firstname"
                        placeholder="Enter first name"
                        value={newFirstname}
                        onChange={handleFirstnameChange}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label className="text-muted">Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="lastname"
                        placeholder="Enter last name"
                        value={newLastname}
                        onChange={handleLastnameChange}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label className="text-muted">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={newEmail}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label className="text-muted">Password</label>
                      <input
                        type="password"
                        className="form-control "
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={newPassword}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">
                          Terms and policies
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterUser;
