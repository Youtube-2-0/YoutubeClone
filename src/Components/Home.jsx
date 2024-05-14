import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const videos = [
    { id: 'video1', title: 'Video 1', categoryId: 'cat1' },
    { id: 'video2', title: 'Video 2', categoryId: 'cat2' },
   
  ];

  return (
    <div>
      <h1>Home</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id}>
            <Link to={`/video/${video.categoryId}/${video.id}`}>
              <h3>{video.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
