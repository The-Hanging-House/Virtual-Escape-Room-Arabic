import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './lesson.css'
import ResponsivePlayer from '../video/ResponsivePlayer'

const Lesson = () => {

    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({ played }) => {
        if(played >= 0.7 && !watchComplete) {
            setWatchComplete(true)
        }
        // console.log(played)

    }
    
    return (
        <section className="landing">
            <div className="orange-overlay">
                <div className="landing-inner">
                    <ResponsivePlayer
                        url="video/briefing1.mp4"
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons">
                                <Link to="briefing2" className="btn btn-light1">
                                ANSWER
                                </Link>
                                <Link to="dashboard2" className="btn btn-primary1">
                                REJECT
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Lesson;