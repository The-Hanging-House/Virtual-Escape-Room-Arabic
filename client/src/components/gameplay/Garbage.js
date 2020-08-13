import React from 'react'
import ReactDOM from 'react-dom'

// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

// import Example from '../games/garbage/example'

function Garbage() {
    return (
        <div className="App">
            <h1>
                Hi!
            </h1>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Garbage />, rootElement)


export default Garbage;