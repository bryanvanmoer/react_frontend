import React from "react";
import { Link } from "react-router-dom";
// import { Context as allContext } from "../../contexts/allContext";

import "../HomePage/home.css";

const Home = () => {
  // const { playersList } = useContext(allContext);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 border">
            <div className="column">
              {" "}
              <Link to="/registerPlayer">register</Link>
            </div>
          </div>
          <div className="col-md-4 border">
            <div className="column">
              {" "}
              <Link to="/loginPlayer">login</Link>
            </div>
          </div>
          <div className="col-md-4 border">
            <div className="column">
              <Link to="/demo">Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
