import React, { useState } from 'react'
import { Link, Redirect} from "react-router-dom";
import './lesson.css'
import ResponsivePlayer from '../video/ResponsivePlayer1'

import briefing1 from '../../video/briefing2.mp4'


const Lesson1 = () => {

    const [watchComplete, setWatchComplete] = useState(false)

    const handleWatchComplete = ({ played }) => {
        if(played >= 0.87 && !watchComplete) {
            
            var someData = new Date().getTime();
            localStorage.setItem('myDataKey', someData);
            console.log("CTSET: ", someData)
            window.location.href = '/scene1';
        }
    }
    

    return (
        <section className="landing4">
            <div className="orange-overlay">
                    <ResponsivePlayer
                        url={briefing1}
                        onProgress={handleWatchComplete} />
                        {/* <div className={watchComplete ? "marker marker--is-complete" : "marker marker--not-complete"}>
                            <div className="buttons4">
                                <Link to="scene1" className="btn btn-primary">
                                   GO INSIDE
                                </Link>
                                
                            </div>
                        </div> */}
                </div>
        </section>
    )
}

export default Lesson1;