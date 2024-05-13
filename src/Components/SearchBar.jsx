import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; // This imports the magnifying glass icon

export default function SearchBar({ searchNote, handleTextChange, handleSubmit }) { // Add handleSubmit prop
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <label htmlFor="searchVideo"></label>
                <input  
                    type="text"
                    value={searchNote}
                    id="searchVideo"
                    onChange={handleTextChange}
                    placeholder="Search"
                />
                <button type="submit" onClick={handleSubmit}><FaSearch /></button> {/* Add button with icon */}
            </div>
        </div>
    );
}
