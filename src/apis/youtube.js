import axios from 'axios'

const KEY = 'AIzaSyCnN8r_kbY5aA6nrM2JNM3nwT1L3_LKQ5I';
export const PRARMS = {
    part: 'snippet',
    maxResults: 5,
    key: KEY
};


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
