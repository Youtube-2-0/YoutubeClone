const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function getVideoById(id) {
    return fetch(`${BASE_URL}&id=${id}`)
    .then(response => response.json())
}

export function getAllVideos() {
    return fetch(BASE_URL)
    .then(response => response.json())
}

export function createVideo(videoData) {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Do we need any other headers???? - As Steve/Mike
        },
        body: JSON.stringify(videoData),
    })
    .then(response => response.json())
    .catch(error => console.error('Error creating video:', error));
}
