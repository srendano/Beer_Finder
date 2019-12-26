import config from './config';
const axios = require('axios');
let result;

export default async (req) =>{
    console.log('Request: ', req.params);
    // filter params here "if +7 create seed between (7,15)"
    await axios.get(`${config().url}/beer/random/?key=${config().key}`)
    .then((response) => {
        console.log('Response: ', response.data.data);
        result = response.data.data;
    })
    .catch((err) => {
        console.log(err);
    });
    return result;
}