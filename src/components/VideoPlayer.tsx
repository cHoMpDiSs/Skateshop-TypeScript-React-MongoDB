import React, {useRef, useState, useEffect} from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer: React.FC = () => {
    const ref = useRef<ReactPlayer | null>(null);
    const [showPreview, setShowPreview] = useState(false);
  
    const handleEnded = () => {
      setShowPreview(true);
      if (ref.current) {
        ref.current.showPreview();
        ref.current.seekTo(0); 
      }
    };

    return (
      <div >
        {showPreview ? (
        <div className='player-wrapper aspect-video mt-20 text-center h-90 flex items-center justify-center'>
          <img  src='images/susaf.png' alt='Preview' width='80%' height='80%' />
          </div>
         
        ) : (
          <div className='player-wrapper aspect-video mt-20 text-center h-90 flex items-center justify-center'>
          <ReactPlayer
            className='react-player'
            playing={true}
            loop={false}
            light='images/susaf.png'
            poster='images/susaf.png'
            url='https://susaf.s3.us-west-1.amazonaws.com/static/video/susaf.mp4'
            width='80%'
            height='80%'
            controls={false}
            ref={ref}
            onEnded={handleEnded}
          />
          </div>
        )}
      </div>
    );
  };
  
  export default VideoPlayer;