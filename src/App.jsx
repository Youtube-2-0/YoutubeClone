import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "./Components/AboutPage";
import CommentForm from './Components/CommentForm';
import Home from './Components/Home';
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import ErrorMessage from './Components/ErrorMessage';
import './App.css';
import './Components/AboutPage.css';
import './Components/CommentForm.css';
import './Components/Home.css';
import './Components/NavBar.css';
import './Components/SearchBar.css';
export default function App() {
    const [searchNote, setSearchNote] = useState('');
    const handleTextChange = (event) => {
        setSearchNote(event.target.value);
    };
    const handleSubmit = () => {
        // Add Mikes and steven's stuff
        console.log("Search for:", searchNote);
    };
    return (
        <Router>
            <NavBar />
            <SearchBar searchNote={searchNote} handleTextChange={handleTextChange} handleSubmit={handleSubmit} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/comment/:id" element={<CommentForm />} />
                {/* Add Mike and Steven's routes*/}
            </Routes>
            <ErrorMessage />
        </Router>
    );
}