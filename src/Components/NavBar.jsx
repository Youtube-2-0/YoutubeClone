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
React YouTube Project - Component Map

1. Main - App.jsx (aka Home) define state for videos here
		a. Search - SearchBar.jsx (child of Main)
		b. NavBar - NavBar.jsx (child of Main)
		b. VideoList - VideoList.jsx (child of Main)
				i. Showpage - ShowPage.jsx (child of VideoList)
						 a1. Comment Form - CommentForm.jsx (child component of ShowPage)
		d. About Page - AboutPage.jsx
		e. ErrorMessage -ErrorMessage.jsx
		f. Sitemap - SiteMap.jsx (child of Main)
1. Readme - README.MD
2. //data/fetch.jsx (not in Components Folder)
3. assets - photos (not in components Folder)


Priorities
1. Data Fetch- API
2. Main, App.jsx - root, Nav / Search
3. About, Home, Showpage
4. Footer, Sitemap, ReadMe.md, assets- photos


YouTube pages Visuals
1. Homepage (Main aka App.jsx)
	 a. Home page on load
		 Includes:
		 `Navbar`
		 `SearchBar` 
		 `Home` link 
		 `About` link
		 `prompt`  - prompts the user to search for videos on load
		 `Site Map`



Mike: Showpage, search
Steve:About, ReadME.md, , assets, sitemap
Nikki:Data,Navbar,comment Form footer
	
	 
	 
	 b. Home page on search
		 Includes:
		 `Navbar`
		 `SearchBar` 
		 `Home` link 
		 `About` link
		 Videos that appear from API
		 `Site Map`
	
	


2. Show page
		 Includes:
		 `Navbar`
		 `Home` link ,
		 `About` link
		 One video that appear from API ready for viewing
		 `Site Map`
		
	a. Comment Form:
		 Includes:
		 `Name` field
		 `Comment` field
		 `Submit` button
		 Comments as examples
		 
		


*/