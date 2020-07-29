import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getCurrentProfile } from '../../actions/profile'
import bg from '../../img/component1.png'

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile])

    return loading && profile === null ? <Spinner /> : 
    <Fragment>
        <div className="bg-image"></div>
        <div className="bg-text1"></div>
        <img className="bg-text1" src={bg} alt="Dashboard" useMap="#workmap" width="400" height="500" />
        <map name="workmap">
            <area shape="rect" coords="633,458,300,350" alt="Computer" href="intro" />
            <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
        </map>
        <div>
            <p className="lead">Welcome { user && user.username }</p>
        </div>
        <div className="buttons">
            <Link to="intro" className="btn btn-light">
            Play Instructions
            </Link>
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
