import axios from 'axios';

const KEY = 'AIzaSyDRuE5nYbzzdsOLUrlgvgrP6sGcH3N0ZvE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});