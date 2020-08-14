import React from 'react'
import ReactDOM from 'react-dom'
import Example from '../games/garbage/example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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