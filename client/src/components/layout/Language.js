import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./language.css";

import bg from "../../img/language-bg.png";


const Language = ({ isAuthenticated }) => {
  return (
    <div className="uuu">
      <img className="" src={bg} width="100%" height="auto" alt="Dashboard" />
      <div className="buttons-language">
        <div className="button-ar">
          <Link
            to="dashboard-ar"
            className=""
            onClick={() => {
              localStorage.setItem("lang", "ar");
            }}
          >
          </Link>
        </div>
        <div className="button-en">
          <Link
            to="dashboard"
            className=""
            onClick={() => {
              localStorage.setItem("lang", "en");
            }}
          >
          </Link>
        </div>
      </div>
    </div>
  );
};

Language.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Language);
