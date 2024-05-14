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
            <nav className={`additional-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="additional-link" onClick={closeMenu}>
                    <FaHome className="icon" />
                    <span>Home</span>
                </Link>
                <Link to="/about" className="additional-link" onClick={closeMenu}>
                    <FaUser className="icon" />
                    <span>About</span>
                </Link>
                <Link to="/short" className="additional-link" onClick={closeMenu}>
                    <FaSubscript className="icon" />
                    <span>Short</span>
                </Link>
                <Link to="/you" className="additional-link" onClick={closeMenu}>
                    <FaVideo className="icon" />
                    <span>You</span>
                </Link>
                <Link to="/history" className="additional-link" onClick={closeMenu}>
                    <FaHistory className="icon" />
                    <span>History</span>
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;
