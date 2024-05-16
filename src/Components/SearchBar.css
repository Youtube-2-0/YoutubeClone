import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaUser, FaSubscript, FaVideo, FaHistory } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const timeoutRef = useRef();
    const dashboardRef = useRef();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        timeoutRef.current = setTimeout(() => {
            setMenuOpen(false);
        }, 2500); // Delay closing the menu to allow mouse to re-enter
    };

    const cancelClose = () => {
        clearTimeout(timeoutRef.current);
    };

    const handleClickOutside = (event) => {
        if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.body.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="hamburger-container">
                <FaBars className="hamburger-icon" onClick={toggleMenu} />
                <div ref={dashboardRef} className={`dashboard-sidebar ${isMenuOpen ? 'open' : ''}`}>
                    <nav className="sidebar-menu">
                        <Link to="/" className="sidebar-link" onClick={closeMenu}>
                            <FaHome className="icon" />
                            <span>Home</span>
                        </Link>
                        <Link to="/about" className="sidebar-link" onClick={closeMenu}>
                            <FaUser className="icon" />
                            <span>About</span>
                        </Link>
                        <Link to="/short" className="sidebar-link" onClick={closeMenu}>
                            <FaSubscript className="icon" />
                            <span>Short</span>
                        </Link>
                        <Link to="/you" className="sidebar-link" onClick={closeMenu}>
                            <FaVideo className="icon" />
                            <span>You</span>
                        </Link>
                        <Link to="/history" className="sidebar-link" onClick={closeMenu}>
                            <FaHistory className="icon" />
                            <span>History</span>
                        </Link>
                    </nav>
                </div>
            </div>
            {/* Additional links and icons below the hamburger icon */}
        </div>
    );
};

export default NavBar;



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