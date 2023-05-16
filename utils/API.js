//! editing required

// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom

// const search = async (query) =>
const search = (query) =>
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
// api key congress.gov 7JqeXnx57GmlOSkwahRXM6cia6X57mpXpdJ29n2v
// ProPublica congress-api key: cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht