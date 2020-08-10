import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './lesson.css'
import ResponsivePlayer from '../video/ResponsivePlayer1'

import briefing1 from '../../video/briefing2.mp4'

const Lesson1 = () => {

    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({ played }) => {
        if(played >= 0.9 && !watchComplete) {
            setWatchComplete(true)
        }
        // console.log(played)

    }
    
    return (
        <section className="landing">
            <div className="orange-overlay">
                    <ResponsivePlayer
                        url={briefing1}
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons1">
                                <Link to="scene1" className="btn btn-primary">
                                PROCEED
                                </Link>
                            </div>
                        </div>
                </div>
        </section>
    )
}

export default Lesson1;