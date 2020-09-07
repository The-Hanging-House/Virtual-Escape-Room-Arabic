import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './lesson.css'
import ResponsivePlayer from '../video/ResponsivePlayer'

import briefing from '../../video/briefing1.mp4'

import AnswerLogo from '../../img/answer.svg'
import RejectLogo from '../../img/reject.svg'

const Lesson = () => {

    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({ played }) => {
        if(played >= 0.7 && !watchComplete) {
            setWatchComplete(true)
        }
        // console.log(played)

    }
    
    return (
            <div className="orange-overlay">
                    <ResponsivePlayer
                        url={briefing}
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons2">
                                <Link to="dashboard2" className="btn btn-primary1">
                                    <img src={RejectLogo} className="reject" alt="reject logo" /><br />
                                    NO, LEAVE ME HERE
                                </Link>
                                <Link to="briefing2" className="btn btn-light1">
                                    <img src={AnswerLogo} className="accept" alt="answer logo" /><br />
                                    CALL NOW
                                </Link>
                            </div>
                        </div>
            </div>
    )
}

export default Lesson;