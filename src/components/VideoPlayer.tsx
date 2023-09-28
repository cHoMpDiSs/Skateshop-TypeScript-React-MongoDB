import React, {useRef, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC = () => {
    const ref = useRef<ReactPlayer | null>(null);
    const [showPreview, setShowPreview] = useState(false);
  
    const handleEnded = () => {
      setShowPreview(true);
      if (ref.current) {
        ref.current.showPreview();
        ref.current.seekTo(0); // Optional: Rewind the video to the beginning
      }
    };

    return (
      <div className='player-wrapper aspect-video mt-20'>
        {showPreview ? (
          <img src='images/susaf.png' alt='Preview' width='100%' height='100%' />
        ) : (
          <ReactPlayer
            className='react-player'
            playing={true}
            loop={false}
            light='images/susaf.png'
            poster='images/susaf.png'
            url='https://susaf.s3.us-west-1.amazonaws.com/static/video/susaf.mp4'
            width='100%'
            height='100%'
            controls={false} // Initially set controls to false
            ref={ref}
            onEnded={handleEnded}
          />
        )}
      </div>
    );
  };
  
  export default VideoPlayer;