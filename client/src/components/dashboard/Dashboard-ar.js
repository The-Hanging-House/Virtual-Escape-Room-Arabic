import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";
import bg from "../../img/01.png";

import Logout from "./../logout/Logout1";

import Music4 from "../../audio/Music4";

var x = 0;

const logout = <Logout />;

const Dashboardar = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (x === 0) {
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/dashboard";
      x = 1;
    }
  }
  // console.log(user && user.username)
  // console.log(user && user._id)

  // const userName = user && user.username

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="bg-image">
        <div className="lock-up"></div>
        <div
          className="logout"
          style={{
            position: "sticky",
            left: "55%",
            bottom: "21%",
            zIndex: "50",
          }}
        >
          {logout}
        </div>
      </div>
      <div className="dashblock">
        <div className="bg-text1"></div>
        <img
          className="bg-text1"
          src={bg}
          width="100%"
          height="auto"
          alt="Dashboard"
        />
        <a href="instruction-ar">
          <div className="button-1"></div>
        </a>

        <div className="lead1">
          <p className="lead1">
            مرحباً
            <br /> {user && user.username}
          </p>
        </div>
      </div>
      <Music4 />
    </Fragment>
  );
};

Dashboardar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboardar);
