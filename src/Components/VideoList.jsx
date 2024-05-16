/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


function VideoList( { videos } ) {
  return (
    <div className="video-list-container">
	{videos ? 
		videos.map((element, index) => {
			return (
				<div key={index} className="video-item">
					<Link to={`/video/${element.id.videoId}`} className="video-link">
						<div key={index}>
							<img src={element.snippet.thumbnails.default.url}
							alt="thumbnail" />

							<div className="title">
							<h3>
								{element.snippet.title}
							</h3>
							</div>

							<p className="channel">
								{element.snippet.channelTitle}
							</p>
						</div>
					</Link>
				</div>
			)}
		): null
	} 
 </div>
  )
}

export default VideoList

//ternary aka conditional rendering. mapping through the array. if true, display, if false - don't display (null)
// replace null with p tag. Perhaps best place to add error 404 page?

/*

Upon using the Home page's search bar, the user should be presented with the first 8 videos that return from the YouTube API. A thumbnail from the video should be shown as well as the title of the video.
If a new search is performed on the Home page, the previous results should be cleared and new results should be shown.
When a user clicks on a displayed video, they should be brought to a new page with a new URL specific to that video. This is the video's Show page.

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