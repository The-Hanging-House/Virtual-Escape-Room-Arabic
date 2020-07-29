import React from "react";
import { Link } from "react-router-dom";


const Intro = () => {
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
              <Link to="/" className="btn btn-primary">
                 INSTRUCTIONS
                </Link>
                <Link to="/scene1" className="btn btn-primary">
                 PLAY 
                </Link>
            </div>
          </div>
        </div>
      </section>
      
    );
  };

  export default Intro;