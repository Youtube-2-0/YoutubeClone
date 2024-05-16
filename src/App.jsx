import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "./Components/AboutPage";
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import ErrorMessage from './Components/ErrorMessage';
import Video from './Components/Video';
import SiteMap from './Components/SiteMap';
import ShowPage from './Components/ShowPage';


import './App.css';

export default function App() {
    const [searchValue, setSearchValue] = useState('');
    const [videos, setVideos] = useState('');

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue} videos={videos} setVideos={setVideos}/>} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/comment/:id" element={<CommentForm />} />
                <Route path='/video/:categoryId/:videoId' element={<Video />} />
                {/* Add Mike and Steven's routes*/}
            </Routes>
            <ErrorMessage />
            <SiteMap />
        </Router>
    );
}


/*
Component Map
1. Main - App.jsx      (aka Home) define state for videos here
        a. Search - SearchBar.jsx (child of Main)
        b. VideoList - VideoList.jsx (child of Main)
        c. Showpage - ShowPage.jsx (child of Main)
                1.Comment Form - CommentForm.jsx (child component of ShowPage)
        d. About Page - AboutPage.jsx
2. NavBar - NavBar.jsx (child of Main)
3. Sitemap - SiteMap.jsx (child of Main)
7. Readme - README.MD
8. //data/fetch.jsx (not in Components Folder)
9. assets - photos (not in Components Folder)



removed :
  <Route path="/comment/:id" element={<CommentForm />} />
*/