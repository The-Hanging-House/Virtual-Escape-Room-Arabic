import React from 'react';
import ReactPlayer from 'react-player'
import './responsive-player.css'

const ResponsivePlayer = ({ url, onProgress }) => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={url}
            width='90%'
            height='90%'
            controls={false}
            playing={true}
            onProgress={onProgress}
          />
        </div>
      )
    
}

export default ResponsivePlayer;
