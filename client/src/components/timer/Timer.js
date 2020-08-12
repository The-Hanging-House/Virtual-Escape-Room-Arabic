import React from 'react'
import ReactStopwatch from 'react-stopwatch';
function Timer(seconds,minutes) {
var seconds=seconds;
var minutes=minutes
    return (
        <div className="bg-text2">
            <h1>10:00</h1>
            <ReactStopwatch
                      seconds={seconds}
                minutes={minutes}
                hours={0}
                limit="00:50:10"
                onChange={({ hours, minutes, seconds }) => {
                }}
                onCallback={() => console.log('Finish')}
                render={({ formatted, hours, minutes, seconds }) => {
                   
                    window.localStorage.setItem("seconds",seconds)
                   window.localStorage.setItem("minutes",minutes)
                   
                    return (
                        <div>
                            <p>
                                Timer: {formatted}
                            </p>
                        </div>
                    );
                }}
            />
        </div>
    )
}


export default Timer