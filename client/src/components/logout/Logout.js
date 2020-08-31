import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import { ReactComponent as Logo } from './logout.svg';


// const [showMessage, setShowMessage] = useState(false);
var ttt = false;

function Example() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
      <Container style={{ paddingTop: '2rem' }}>
        {showButton && (
          <a
            onClick={() => setShowMessage(true)}
            // size="lg"
          >
            <Logo/>
          </a>
        )}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="alert"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Alert
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
            <Alert.Heading>
              Animated alert message
            </Alert.Heading>
            <p>
              This alert message is being transitioned in and
              out of the DOM.
            </p>
            <a onClick={logout} href='#!'>
                <Logo />
                <h3>EXIT</h3>
            </a>
            <Button onClick={() => setShowMessage(false)}>
              Close
            </Button>
          </Alert>
        </CSSTransition>
      </Container>
    );
  }


const Logout = ({ auth: { isAuthenticated, loading }, logout }) => {

    const guestLinks = (
        <div className="bg-text4">
            {/* <a onClick={logout} href='#!'> */}
                <Logo />
                <h3>EXIT</h3>
            {/* </a> */}
        </div>
    );

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="bg-text4">
            {/* <Example/> */}
            <Container style={{ paddingTop: '2rem' }}>
        {showButton && (
          <a
            onClick={() => setShowMessage(true)}
            // size="lg"
          >
            <Logo/>
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
              Are you sure you want to logout?
            </Alert.Heading>
            <Button onClick={() => setShowMessage(false)}>
              Close
            </Button>
            <Button onClick={logout}>
              Logout
            </Button>
            </div>
          </Alert>
        </CSSTransition>
      </Container>
      

        </div>
    )
}

 Logout.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
 }

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, { logout })(Logout);