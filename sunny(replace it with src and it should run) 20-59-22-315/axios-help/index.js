const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:5090/'
})

export default instance;
