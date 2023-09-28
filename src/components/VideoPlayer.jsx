import React, {useRef} from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const ref = useRef(null)
    return (
        
        <div className='player-wrapper aspect-video mt-20'>
        <ReactPlayer className='react-player '
        playing={true}
        loop={false}
        light="images/susaf.png"
        poster="images/susaf.png"
        url="https://susaf.s3.us-west-1.amazonaws.com/static/video/susaf.mp4"
        width='100%'
        height='100%'
        controls = {true}
        ref={ref}
        onEnded={() => ref.current.showPreview()}
        />
        </div>
    )
}

export default VideoPlayer;