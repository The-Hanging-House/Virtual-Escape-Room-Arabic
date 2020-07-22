import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="orange-overlay">
        <div className="landing-inner">
          <h1 className="x-large">
            DESERT
            <br />
            SURVIVAL
          </h1>
          <p className="lead">A VIRTUAL ESCAPE ROOM</p>
          <div className="buttons">
            <Link to="login" className="btn btn-light">
              LOG IN
            </Link>
            <Link to="register" className="btn btn-primary">
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
