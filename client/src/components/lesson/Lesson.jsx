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
        <section className="landing3">
            <div className="orange-overlay">
                    <ResponsivePlayer
                        url={briefing}
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons4">
                                <Link to="scene1" className="btn btn-primary">
                                   CONTINUE
                                </Link>
                                
                            </div>
                        </div>
            </div>
        </section>
    )
}

export default Lesson;