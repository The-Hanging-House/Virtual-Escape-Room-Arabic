import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'
import bg from '../../img/01.png'

import Logout from './../logout/Logout'

const logout = <Logout />

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])
    // console.log(user && user.username)
    // console.log(user && user._id)
    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        {logout}
        <div className="bg-image"></div>
        <div className="bg-text1"></div>
        <img className="bg-text1" src={bg} alt="Dashboard" useMap="#workmap" width="600" height="420" />
        <a href="instruction">
            <div className="button-1"></div>
        </a>
        
        <div className="lead1">
            <p className="lead1">Hello <br /> { user && user.username }</p>
        </div>
        
    </Fragment>

}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
