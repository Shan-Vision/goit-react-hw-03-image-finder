import axios from 'axios';

const API_KEY = '27574969-e5fa37593c412d62423f6ba4e';
const API_BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = API_BASE_URL;

export async function fetchImagesByName(name) {
  const response = await axios.get(
    `?key=${API_KEY}&q=${name}&image_type=photo`
  );
  return response.data.hits;
}
