import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './lesson.css'
import ResponsivePlayer from '../video/ResponsivePlayer1'

const Lesson1 = () => {

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
                        url="video/briefing2.mp4"
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons">
                                <Link to="scene1" className="btn btn-primary">
                                PROCEED
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Lesson1;