//! editing required
const axios = require('axios');
// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

//senators
axios.request({
    url: "http://api.propublica.org/congress/v1/116/senate/members.json",
    headers: { 'X-API-Key': process.env.REACT_APP_API_KEY },
    method: 'get'                      
}).then(response => {
    // console.log(response.data.url);
    console.log(response.data)
}).catch(error => {
    console.log(error);
});

// bills
axios.request({
    url: "http://api.propublica.org/congress/v1/bills/search.json?query=megahertz",
    headers: { 'X-API-Key': process.env.REACT_APP_API_KEY },
    method: 'get'                      
}).then(response => {
    // console.log(response.data.url);
    console.log(response.data)
}).catch(error => {
    console.log(error);
});

// votes
axios.request({
    url: "http://api.propublica.org/congress/v1/115/senate/sessions/1/votes/17.json",
    headers: { 'X-API-Key': process.env.REACT_APP_API_KEY },
    method: 'get'                      
}).then(response => {
    // console.log(response.data.url);
    console.log(response.data)
}).catch(error => {
    console.log(error);
});


export default search;



