const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function getVideoById(id) {
    return fetch(`${BASE_URL}&id=${id}`)
    .then(response => response.json())
}

export function getAllVideos() {
    return fetch(BASE_URL)
    .then(response => response.json())
}

export function createVideo() {
    
}

export function getChannel(channelId) {
    return fetch(`https://www.googleapis.com/youtube/v3/channels?key=${URL}&part=snippet,statistics&id=${channelId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching channel information was not successful")
      }
      return response.json();
    })
  }


  export function latestShow() {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=8&key=${URL}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetching API was not successful")
      }
      return response.json();
    })
  }