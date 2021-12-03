const axios = require('axios');

const instance = axios.create({
  //In production, we do a different URL
  baseURL: 'http://localhost:5000/'
})

export default instance;
