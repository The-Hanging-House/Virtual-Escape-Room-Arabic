import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'
import bg from '../../img/01.png'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])
    // console.log(user && user.username)
    // console.log(user && user._id)
    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <div className="bg-image"></div>
        <div className="bg-text1"></div>
        <img className="bg-text1" src={bg} alt="Dashboard" useMap="#workmap" width="400" height="500" />
        <map name="workmap">
            <area shape="rect" coords="150,170,500,425" alt="Intro" href="instruction"/>
            {/* <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" /> */}
        </map>
        <div className="lead1">
            <p className="lead1">Welcome <br /> { user && user.username }</p>
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