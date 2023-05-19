//! editing required

// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom

// const search = async (query) =>
const search = (query) =>
  axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
// api key 7JqeXnx57GmlOSkwahRXM6cia6X57mpXpdJ29n2v
// ProPublica congress-api key: cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht

export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};