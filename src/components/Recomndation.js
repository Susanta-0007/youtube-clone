import React from 'react'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
const Recomndation = ({relatedVideos}) => {
  return (
    <div>
      {relatedVideos.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCard info={item} />
            </Link>
          );
        })}
    </div>
  )
}

export default Recomndation;