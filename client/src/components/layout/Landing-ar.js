import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import hint from "../../img/hint.svg";

var x = 0;

const Landingar = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard-ar" />;
  }

  if (x === 0) {
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/home";
      x = 1;
    } 
  }

  function Initimg() {
    const [displayProp, setDisplayProp] = React.useState(false);

    setTimeout(function () {
      setDisplayProp(true);
    }, 6000);

    return (
      <>
        <div
          style={{
            display: displayProp ? "none" : "block",
            zIndex: "200",
            left: "50%",
            top: "50%",
          }}
        >
          <img src={hint} alt=" " style={{ width: "100%", height: "100%" }} />
        </div>
      </>
    );
  }

  const intiImage = <Initimg />;

  return (
    <section className="landing">
      <div className="lock-up"></div>
      <div className="orange-overlay">
        <div className="landing-inner">
          {intiImage}
          {/* <h1 className="x-large">
            DESERT
            <br />
            SURVIVAL
          </h1> */}
          {/* <p className="lead">A VIRTUAL ESCAPE ROOM</p> */}
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

Landingar.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landingar);
