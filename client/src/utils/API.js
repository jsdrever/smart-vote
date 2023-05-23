//! editing required
const axios = require('axios');

// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

axios.request({
    url: "https://api.propublica.org/congress/v1/116/senate/members.json",
    headers: { 'X-API-Key': "cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht" },
    method: 'get'                      
}).then(response => {
    // console.log(response.data.url);
    console.log(response.data)
}).catch(error => {
    console.log(error);
});


export default search;

// api key 7JqeXnx57GmlOSkwahRXM6cia6X57mpXpdJ29n2v
// ProPublica congress-api key: cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht

// let url = 'https://api.propublica.org/congress/v1/116/senate/members.json';
// axios.get(url,
//   { 
//     headers: { 
//       'X-API-Key': "cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht"
//     }
//   }
// )
// .then (res=>console.log(res))   
// .catch(err => console.log(err));

