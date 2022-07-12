import axios from 'axios';

const API_KEY = '27574969-e5fa37593c412d62423f6ba4e';
axios.defaults.baseURL = 'https://pixabay.com/api/';

 const fetchImages = async (name, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return response.data;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchImages,
};
