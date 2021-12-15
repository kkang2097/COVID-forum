const axios = require('./axios-help.js');


//Functions here
module.exports = {
  //Testing axios in general
  async function getNumber (){
    const number = await axios.get('/api/getNumber');
    return number;
  }

  //API calls

  async function getUserToken (user) {
    const token = await axios.get('/api/getToken', user);
    return token;
  }

  async function postUserToken (user) {
    const token = await axios.post('/api/postToken', user);
    return token;
  }

}
