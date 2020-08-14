import React from 'react'
import ReactStopwatch from 'react-stopwatch';
function Timer(seconds,minutes) {
var seconds=seconds;
var minutes=minutes
const [counter, setCounter] = React.useState(600);

React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

    return (
       
        <div className="bg-text2">
            <h1>10:00</h1>
           
                  
            <div>Timer: {counter}</div>
          
        </div>
    )
}


export default Timer