import SearchBar from './SearchBar';
import VideoList from './VideoList';
import './HomePage.css';
/* eslint-disable react/prop-types */

function Home({ searchValue, setSearchValue, videos, setVideos }) {
  return (
    <div className="home-page-container">
      <div className="search-video-container">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setVideos={setVideos} />
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default Home;


/*

The HomePage Component acts as the main component in displaying the search functionality and the list of videos retrieved from the YouTube API. It orchestrates the interaction between the `SearchBar` an d`VideoList` components by passing them necessary props. 

The HomePage imports the SearchBar and VideoList components from their respective files. These Components are used to display teh search bar and the list of videos on the home page:

`import SearchBar from './SearchBar';
import VideoList from './VideoList';`



The Function Component: Homepage is a functional component defined using arr function syntax. It receiveds four props: searchValue, setSearchValue, videos, and setVideos.

`function Home({searchValue, setSearchValue, videos, setVideos}) {`


Logging Videos: This line below logs the `videos` props to the console. It is useful for debugging and understanding what data is passed to the component.

`console.log(videos);
`

Return Statement: returns the JSX - represents the structure and content of the component. It renders a `div` element containing the `SearchBar` and `VideoList` components.

return (
  <div>
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setVideos={setVideos} /> 
    <VideoList videos={videos} />
  </div>
)


SearchBar Component: Render the `SearchBar` componenet and passes its props `searchValue`, `setSearchValue` and `setVideos. These props are used to handle search functionality and update the state of the home page.

<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setVideos={setVideos} />


VideoList Component: Renders teh `VideoList` component and passes it the `videos` prop. Thius prop contains the list of videos fetched from teh API based on the search query.

<VideoList videos={videos} />

Export: The `HomePage` component is exported as the default export, making it available for use in other parts of t eh application.

export default Home;



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


