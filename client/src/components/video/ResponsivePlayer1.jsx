import React from 'react';
import ReactPlayer from 'react-player'
import './responsive-player.css'

const ResponsivePlayer1 = ({ url, onProgress }) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='100%'
            height='95%'
            playsinline
            controls={true}
            playing={true}
            onProgress={onProgress}
          />
        </div>
      )
    
}

export default ResponsivePlayer1;