import React from 'react';
import Party from './opening.mp3'

class Music1 extends React.Component {
    render() {
        return (
            <div>
                <audio ref='audio_tag' src={Party} autoPlay loop type="audio/mpeg" />
            </div>
        )
    }
}

export default Music1;