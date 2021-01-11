import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { ReactComponent as Logo } from "./logout.svg";

const Logout = ({ auth: { isAuthenticated, loading }, logout }) => {


  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="bg-text4">
      {/* <Example/> */}
      <Container>
        {showButton && (
          <a onClick={() => setShowMessage(true)}>
            <Logo />
            <h3 style={{ fontSize: "1.3rem", letterSpacing: "0" }}>الخروج</h3>
          </a>
        )}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert5"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Alert
            classNames="alert5"
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <div className="alert-inside5">
              <Alert.Heading>
                <h1
                  className="large text-primary"
                  style={{ fontSize: "1.4rem", letterSpacing: "0" }}
                >
                  تسجيل خروج
                </h1>
                <p style={{ marginTop: "2rem", letterSpacing: "0" }}>
                  هل أنت متأكد أنك تريد تسجيل الخروج؟
                </p>
              </Alert.Heading>
              <Button
                onClick={() => setShowMessage(false)}
                style={{ width: "40%", letterSpacing: "0", padding: "0" }}
              >
                أغلق
              </Button>
              <Button
                onClick={logout}
                style={{ width: "40%", letterSpacing: "0", padding: "0" }}
              >
                تسجيل خروج
              </Button>
            </div>
          </Alert>
        </CSSTransition>
      </Container>
    </div>
  );
};

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Logout);
