import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



import hint from '../../img/click.svg'

const Landing = ({ isAuthenticated}) => {
  if(isAuthenticated) {
    return <Redirect to ='/dashboard' />
  }

function Initimg(){
  const [displayProp, setDisplayProp] = React.useState(false);

  setTimeout(function(){
    setDisplayProp(true);
    console.log("TEXT")
  }, 6000);

    return (
    <>
    <div style={{display: displayProp? 'none' : 'block', position: "absolute", zIndex: "200", left: "50%", top: "50%", transform: "translate(-100%, -180%)"}}>
        <img src = {hint} style={{width: "150%", height: "150%"}}/>
    </div>
    </>
    )
}

const intiImage = <Initimg/>

  return (
    <section className="landing">
      <div className="lock-up"></div>
      <div className="orange-overlay">
        <div className="landing-inner">
        {intiImage}
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
