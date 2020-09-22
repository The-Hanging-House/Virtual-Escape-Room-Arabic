import React, { Fragment, useState, Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { set } from "mongoose";
// import { register } from "../../actions/auth";

var runOnce = 0;
var runTwice = 0;
var userSave = "a";
var emiratesSelect;


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    emirates: "",
    selectValue: "",
    name: "",
    school: ""
  });


  var { username, email, password, password2, emirates, selectValue, name, school, age } = formData;
  
  if (username !== "undefined"){
    userSave = username;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = async (e) => {
    
    if (number <= 14){

      email = username+"@gmail.com";
    }
    password = username;
    password2 = username;

    if (selectValue === ""){
      setFormData({ ...formData, selectValue: "Dubai" })
      console.log("ChANGE")
    }

    console.log("FormData: ", formData);
    console.log("number", number);

    e.preventDefault();
    if(selectValue === ""){
      setAlert("Please Select Emirate", "danger");
    } else if (username.length === 0 ){
      setAlert("Please input username", "danger")
    }
    else if (password !== password2) {
      setAlert("Passwords do not match!", "danger");
    }
    else if (username.length <=3){
      setAlert("Username 4 characters min", "danger")
    }
     else if (username.length >= 9){
      setAlert("Username 8 characters max", "danger")
    }
     else {
      register({ username, email, password });
    }
    console.log(username.length)
  };

  
  const [textInput, setTextInput] = useState("");
  const [number, setNumber] = useState("");
  const [textIs, setTextIs] = useState(true);
  const [disability, setDisability] = useState("");
  const [isVisible, setVisibile] = useState(true);

  function checkers(){
    console.log("age: ", number);
  }

if (number !== "" && number > 14){
  if (runOnce === 0){
    setVisibile(false);
    setTextIs(true);
    setDisability("")
    runOnce = 1;
    runTwice = 0
  }
}
if (number !== "" && number <= 14 ){
  if (runTwice === 0){
    setVisibile(true);
    setTextIs(false);
    setDisability("disabled")
    runTwice = 1;
    runOnce = 0;
  }
}

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  
  return (
    <Fragment>
      <div className="bg-image"><div className="lock-up"></div></div>
      <div className="bg-text">
      <h1 className="large text-primary">REGISTER</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)} style={{ WebkitUserSelect: 'text' }}>

        <div className="form-group">
          <input
            type="text"
            placeholder="Username (max 8 characters)"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            style={{ WebkitUserSelect: 'text' }}
          />
        </div>
        <div className="form-group" style={{display:'none' }}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            style={{ WebkitUserSelect: 'text' }}
          />
        </div>
        <div className="form-group" style={{display: 'none' }}>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            style={{ WebkitUserSelect: 'text' }}
          />
        </div>

        <div className="form-group">
            <select id="dropdown" name="emirates" style={{ color: '#717171', appearance: 'none', background: 'url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #eee', backgroundPositionX: '323px', backgroundSize: '12px' }} value={selectValue} onChange={(e) => onChange(e)} name="selectValue" placeholder="Select Emirates" >
              <option value="" disabled selected>Select Emirate</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Ras Al-khaimah">Ras Al-khaimah</option>
              <option value="Umm al Quwain">Umm al Quwain</option>
              <option value="Fujairah">Fujairah</option>
              <option value="Other">Other</option>
            </select >
          </div>
        <div className="form-group">
            <input
              type="number"
              placeholder="Enter Your Age"
              name="age"
              value={number}
              onChange={e => {setNumber(e.target.value); checkers()}}
              style={{ WebkitUserSelect: 'text' }}
            />
        </div>
        <div className="form-group" style={{display: isVisible? 'none' : 'inline'}}>
          <input
            disability
            type="email"
            placeholder="Email Address"
            name="email"
            value={textIs? textInput : username + "@e.com"}
            onChange={(e) => {setTextInput(e.target.value); onChange(e) }}
            style={{ WebkitUserSelect: 'text' }}
          />
        </div>
        <div className="form-group" style={{display: isVisible? 'none' : 'inline'}}>
          <input
            disability
            type="text"
            placeholder="School / Company"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <input type="submit" value="CONTINUE"  className="btn btn-primary" />
        </div>
        <p className="my-1">
        ALREADY REGISTERED? <Link to="/login" className='link'>LOG IN</Link>
      </p>
      </form>

      
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);