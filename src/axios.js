import axios from 'axios';

axios.defaults.withCredentials = true;

console.log(process.env);

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default instance;
