import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'

const Dashboard2 = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <div className="bg-image"></div>
        <img className="bg-text1" useMap="#workmap" />
        <a href="instruction">
            <div className="button-1"></div>
        </a>
        <a href="briefing">
            <div className="button-2"></div>
        </a>
        {/* <map name="workmap">
            <area shape="rect" coords="240,460,600,530" alt="Intro" href="instruction"/>
            <area  shape="rect" coords="400,550,680,600" alt="Game" href="briefing" />
        </map> */}
        <div className="lead1">
            <p className="lead1">Hello <br /> { user && user.username }</p>
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
