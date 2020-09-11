import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  var { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setFormData({ ...formData, [e.target.password]: e.target.value });
  }

  const onSubmit = async (e) => {
    // setFormData({ ...formData, [e.target.password]: e.target.value });
    password = username;
    console.log(password);
    e.preventDefault();
    login(username, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
    <div className="bg-image"><div className="lock-up"></div></div>
    
    <div className="bg-text">
    <h1 className="large text-primary" style={{ fontSize: '1.4rem' }}>LOG IN</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group" style={{ display: 'none' }}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            // required
            // minLength="6"
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <input type="submit" value="CONTINUE" className="btn btn-primary" />
        </div>
      </form>

      <p className="my-1">
        DON'T HAVE AN ACCOUNT? <Link to="/register" className='link'>SIGN UP</Link>
      </p>
    </div>  
    <section className="login">
    </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);