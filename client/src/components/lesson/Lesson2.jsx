import React, { useState } from 'react'
import { Link, Redirect} from "react-router-dom";
import './lesson2.css'
import ResponsivePlayer from '../video/ResponsivePlayer2'

import briefing2 from '../../video/instruction.mp4'


const Lesson2 = () => {

    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({ played }) => {
        if(played >= 0.8 && !watchComplete) {
            setWatchComplete(true)
            var someData = new Date().getTime();
            localStorage.setItem('myDataKey', someData);
            console.log("CTSET: ", someData)
        }
    }
    

    return (
        <section className="landing">
            <div className="orange-overlay">
                    <ResponsivePlayer
                        url={briefing2}
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons1">
                                <Link to="dashboard2" className="btn btn-primary" style={{ right: '-30vh' }}>
                                    PROCEED
                                </Link>
                                
                            </div>
                        </div>
                </div>
        </section>
    )
}

export default Lesson2;