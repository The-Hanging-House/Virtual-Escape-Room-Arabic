import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'
import bg from '../../img/component1.png'

const Dashboard2 = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <div className="bg-image"></div>
        <div className="bg-text1"></div>
        <img className="bg-text1" src={bg} alt="Dashboard" useMap="#workmap" width="400" height="500" />
        <map name="workmap">
            <area shape="rect" coords="150,170,500,425" alt="Intro" href="instruction"/>
            <area shape="rect" coords="300,429,751,480" alt="Game" href="scene1" />
        </map>
        <div className="lead1">
            <p className="lead1">Welcome <br /> { user && user.username }</p>
        </div>
        
    </Fragment>

}

Dashboard2.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard2)
