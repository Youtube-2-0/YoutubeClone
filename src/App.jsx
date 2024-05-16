import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "./Components/AboutPage";
import Home from './Components/HomePage';
import NavBar from "./Components/NavBar";
import ErrorMessage from './Components/ErrorMessage';
import SiteMap from './Components/SiteMap';
import Video from './Components/Video';

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
                <Route path="/video/:id" element={<Video />} />
                {/* Add Mike and Steven's routes*/}
            </Routes>
            
            <SiteMap />
        </Router>
    );
}


/*
Component Map
React YouTube Project - Component Map

1. Main - App.jsx define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
        c. Home Page - HomePage.jsx (child of Main) - route as "Home"
		d. VideoList - VideoList.jsx (child of Main)
		e. Show Page - ShowPage.jsx (child of Main)
			    i. Comment Form - CommentForm.jsx (child component of ShowPage)
		f. About Page - AboutPage.jsx
		g. Sitemap - SiteMap.jsx (child of Main)
2. Readme - README.MD
3. //data/fetch.jsx (not in Components Folder)
4. assets - photos (not in components Folder)

App.jsx - Main component of a React application. Serves as the entry point for the application UI (user interface).

*/