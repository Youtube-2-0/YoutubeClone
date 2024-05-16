import NikiKhanam from "../assets/NikiKhanam.jpg";
import MichaelDantzler from "../assets/MichaelDantzler.png";
import StevenRouse from "../assets/StevenRouse.png";


export default function AboutPage() {
    return (
        <div>
            <h2>About Us</h2>
            
            <div className="team-list-container">
                <h2>Meet Our Team</h2>
                <div className="team-list">
                    <ul>
                        <li>
                            <a href="https://github.com/MikesKids" target="_blank" rel="noopener noreferrer">
                                <img src={MichaelDantzler} alt="Michael Dantzler" />
                                <p>I am a husband, and father to 5 beautiful children (Elijah, Nyla, Zoey, Brandon and Raine). I have worked in the title insurance industry for the past 20 years. I am a title specialist, with a keen eye for detail. With my ability to pay attention to the most minuscule details, it has given me the unique position to excel in my industry. I have taken this unique ability, and decided to apply it to software development. I've generated so much success in spotting deficiencies, that my cohort coaches and fellows have given me the nickname “Hawkeye”. Like the Avenger, with the same name, I consider myself to be a regular person, with an exceptional eye for detail.</p>
                                <p>GitHub: MikesKids</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/incognito1025" target="_blank" rel="noopener noreferrer">
                                <img src={NikiKhanam} alt="Niki Khanam" />
                                <p>I'm a Pursuit fellow with a background in nonprofits who transitioned into software engineering out of a desire to automate tasks. I bring skills in database management, event planning, grant writing, fundraising, and development, all focused on furthering nonprofit missions. I'm passionate about staying relevant and am currently expanding my knowledge in computer science.</p>
                                <p>GitHub: incognito1025</p>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ROUSE-prog" target="_blank" rel="noopener noreferrer">
                                <img src={StevenRouse} alt="Steven Rouse" />
                                <p>I have been a self-taught software engineer for the last four years now. With a background in Audio-visual programming and project management, I love learning new cutting edge technology and applying it to a consumer-focused application.</p>
                                <p>GitHub: ROUSE-prog</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


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