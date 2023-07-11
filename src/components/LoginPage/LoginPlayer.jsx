import React, { useState, useContext } from "react";
import { Context as allContext } from "../../contexts/allContext";
import { useNavigate } from "react-router-dom";

import * as playersService from "../../services/playerApi";

const LoginPlayer = () => {
  const { setIsUserLoggedIn } = useContext(allContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameObject = {
      email: email,
      password: password,
    };
    playersService.login(nameObject).then((response) => {
      if (response) {
        localStorage.setItem("jwtToken", response.token);
        setIsUserLoggedIn(true);
        setMessage("Connexion réussie");
      } else {
        setMessage("Identifiants incorrects. Veuillez réessayer.");
      }
    });
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <div>
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-12 col-md-6">
              <div className="card">
                <div className="card-header">
                  <strong>Login to your account</strong>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                      <label className="text-muted">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
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
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="form-group mb-2">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Remember me</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                  <p>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPlayer;
