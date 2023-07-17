import React from "react";

import "../HomePage/home.css";

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 border">
            <div className="column">Code</div>
          </div>
          <div className="col-md-4 border">
            <div className="column">says always</div>
          </div>
          <div className="col-md-4 border">
            <div className="column">the truth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
