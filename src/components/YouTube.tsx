import React from 'react';
import YouTubePlayer from 'react-player/youtube';

interface YouTubeProps {
  src: string; // The YouTube video URL
}

const YouTube: React.FC<YouTubeProps> = ({ src }) => {
  return (
    <div className='player-wrapper aspect-video mt-20 text-center h-90 flex items-center justify-center'>
       
      <YouTubePlayer 
      url={src} 
      controls={true} 
      width='80%'
      height='80%' />
      </div>
 
  );
};

export default YouTube;
