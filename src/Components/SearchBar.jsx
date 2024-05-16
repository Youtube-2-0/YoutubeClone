import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; // This imports the magnifying glass icon
/* eslint-disable react/prop-types */
export default function SearchBar({ searchValue, setSearchValue, setVideos }) { // Add handleSubmit prop

    const key = import.meta.env.VITE_API_KEY;
    const handleTextChange = (event) => {
        console.log(event.target.value)
    setSearchValue(event.target.value);
};

    const handleSubmit = () => {
    // Add Mikes and steven's stuff
    fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchValue}&key=${key}`
      )
    .then(response => response.json())
    .then(data => setVideos(data.items))
    .catch((error) => {
        console.log(error)
    })
    console.log("Search for:", searchValue);
};


    return (
        <div className="search-bar-container">
            <h3>Begin your search!</h3>
            <div className="search-bar">
                <label htmlFor="searchVideo"></label>
                <input  
                    type="text"
                    value={searchValue}
                    id="searchVideo"
                    onChange={handleTextChange}
                    placeholder="Search"
                />
                <button type="submit" onClick={handleSubmit}><FaSearch /></button> {/* Add button with icon */}
            </div>
        </div>
    );
}



//changed results number via `&maxResults=8`


/*

Components Map

1. Main - App.jsx define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
        c. Home Page - HomePage.jsx (child of Main)
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