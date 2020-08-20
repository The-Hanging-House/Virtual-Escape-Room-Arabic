import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated}) => {
  if(isAuthenticated) {
    return <Redirect to ='/dashboard' />
  }

  

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

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);