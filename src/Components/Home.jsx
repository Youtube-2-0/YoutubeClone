import SearchBar from './SearchBar.jsx'
/* eslint-disable react/prop-types */

function Home({searchValue, setSearchValue, videos, setVideos}) {
console.log(videos);
  return (
    <div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setVideos={setVideos} />
    </div>
  )
}

export default Home
