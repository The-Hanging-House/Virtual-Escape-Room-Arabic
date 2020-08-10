import React from 'react';
import Birds from './Birds.mp3'

class Music2 extends React.Component {
    render() {
        return (
            <div>
                <audio ref='audio_tag' src={Birds} autoPlay loop />
            </div>
        )
    }
}

export default Music2;