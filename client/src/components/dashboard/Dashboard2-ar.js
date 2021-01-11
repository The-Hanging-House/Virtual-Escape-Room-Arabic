import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";
import bg from "../../img/component1.png";

import Logout from "./../logout/Logout1-ar";

import Music4 from "../../audio/Music4";

var x = 0;

const logout = <Logout />;

const Dashboard2ar = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (x === 0) {
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/dashboard2";
      x = 1;
    }
  }

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
            bottom: "19%",
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
          alt="Dashboard"
          useMap="#workmap"
          width="600"
          height="420"
        />
        <a href="instruction-ar">
          <div className="button-1"></div>
        </a>
        <a href="briefing-ar">
          <div className="button-2"></div>
        </a>
        <div className="lead1-ar">
          <p className="lead1-ar">
            مرحباً
            <br /> {user && user.username}
          </p>
        </div>
      </div>
      <Music4 />
    </Fragment>
  );
};

Dashboard2ar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard2ar);
