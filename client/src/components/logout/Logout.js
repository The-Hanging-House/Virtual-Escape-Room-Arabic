import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

import { ReactComponent as Logo } from './logout.svg'

const Logout = ({ auth: { isAuthenticated, loading }, logout }) => {

    const guestLinks = (
        <div className="bg-text4">
            {/* <a onClick={logout} href='#!'> */}
                <Logo />
                <h3>EXIT</h3>
            {/* </a> */}
        </div>
    );

    return (
        <div className="bg-text4">
            <a onClick={logout} href='#!'>
                <Logo />
                <h3>EXIT</h3>
            </a>
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