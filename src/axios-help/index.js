const axios = require('./base-instance.js');


//Functions here
module.exports = {

  async function getUserToken (user) {
    const token = await axios.get('/api/getToken', user);
    return token;
  }

  async function postUserToken (user) {
    const token = await axios.post('/api/postToken', user);
    return token;
  }


  
}
