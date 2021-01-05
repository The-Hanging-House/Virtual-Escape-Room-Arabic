import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import hint from "../../img/hint.svg";

const Language = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
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
    <section className="">
      <div className="lock-up"></div>
      <div className="orange-overlay">
        <div className="landing-button-group">
          {/* {intiImage} */}
          {/* <h1 className="x-large">
            DESERT
            <br />
            SURVIVAL
          </h1> */}
          {/* <p className="lead">A VIRTUAL ESCAPE ROOM</p> */}
          <div className="buttons-language">
            <Link
              to="home-ar"
              className="btn btn-primary"
              onClick={() => {
                localStorage.setItem("lang", "ar");
              }}
            >
              ARABIC
            </Link>
            <Link
              to="home"
              className="btn btn-primary"
              onClick={() => {
                localStorage.setItem("lang", "en");
              }}
            >
              ENGLISH
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Language.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Language);
