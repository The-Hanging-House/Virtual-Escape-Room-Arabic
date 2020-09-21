import React, { useState } from 'react'
import { Link, Redirect} from "react-router-dom";
import './lesson2.css'
import ResponsivePlayer from '../video/ResponsivePlayer2'

import briefing2 from '../../video/instruction.mp4'


const Lesson2 = () => {

    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({ played }) => {
        if(played >= 0.87 && !watchComplete) {
            setWatchComplete(true)
            var someData = new Date().getTime();
            localStorage.setItem('myDataKey', someData);
            console.log("CTSET: ", someData)
        }
    }
    

    return (
            <div className="video-player2">
                    <ResponsivePlayer
                        url={briefing2}
                        onProgress={handleWatchComplete} />
                        <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons1">
                                <Link to="dashboard2" className="btn btn-primary" >
                                    LET'S PLAY!
                                </Link>
                                
                            </div>
                        </div>
                </div>
   
    )
}

export default Lesson2;