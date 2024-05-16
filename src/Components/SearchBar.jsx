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
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&key=${key}`
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
