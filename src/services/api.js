import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30498969-67220c0dc8cbfcdc961351d72';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const config = {
    params: {
      q: query,
      page: page,
    },
  };
  const response = await axios.get('', config);
  console.log(response.data);
  return response.data;
};
