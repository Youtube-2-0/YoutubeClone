const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_APP_API_KEY}`;

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