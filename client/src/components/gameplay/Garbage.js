import React from 'react'
import ReactDOM from 'react-dom'
// import Example from '../games/garbage/example'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'



function Garbage() {
    return (
        <div className="App">
            <h1>
                <h1>Hi</h1>
            </h1>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Garbage />, rootElement)


export default Garbage;