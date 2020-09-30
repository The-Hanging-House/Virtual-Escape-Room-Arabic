import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import { ReactComponent as Logo } from './logout.svg';


const Logout1 = ({ auth: { isAuthenticated, loading }, logout }) => {

    // const guestLinks = (
    //     <div className="bg-text4">
    //             <Logo />
    //             <h3>EXIT</h3>
    //     </div>
    // );

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <div className="bg-text4">
            {/* <Example/> */}
            <Container>
        {showButton && (
          <a
            onClick={() => setShowMessage(true)}
          >
            <Logo/>
            <h3 styl={{ fontSize: '1.3rem' }}>EXIT</h3>
          </a>
        )}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classnames="alert22"
          unmountOnExit
          onEnter={() => setShowButton(false)}
          onExited={() => setShowButton(true)}
        >
          <Alert
            classnames="alert22"
            variant="primary"
            dismissible
            onClose={() => setShowMessage(false)}
          >
           <div className="alert-inside22"> 
            <Alert.Heading>
              <h1 className="large text-primary" style={{ fontSize: '1.4rem' }}>LOG OUT</h1>
              <p style={{ marginTop: '2rem' }}>
              ARE YOU SURE YOU WANT TO LOGOUT?
              </p>
            </Alert.Heading>
            <Button onClick={() => setShowMessage(false)} style={{width:'40%'}}>
              Close
            </Button>
            <Button onClick={logout} style={{width:'40%'}}>
              Logout
            </Button>
            </div>
          </Alert>
        </CSSTransition>
      </Container>
    </div>
  )
}

 Logout1.propTypes = {
   logout: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
 }

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, { logout })(Logout1);