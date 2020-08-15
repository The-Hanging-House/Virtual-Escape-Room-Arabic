import React from 'react'
import ReactDOM from 'react-dom'

import Index from '../games/garbage/index'


function Garbage() {
    return (
        <div className="App">
            <Index />
        </div> 
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Garbage />, rootElement)


export default Garbage;