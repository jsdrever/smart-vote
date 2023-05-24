import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
import { QUERY_MATCHUPS } from '../../utils/queries';
import React, { useState, useEffect } from 'react';
// import search from 'API';
import axios from 'axios';

//! needs to create cards like these for each corresponding bill / senator

const Bills = () => {
  const [bills, setBills] = useState([]);

  const apiKey = 'cxscIDM6F7yNhGWcXHehmlLYMP8rZ31FAjKEj1Ht';
  const apiUrl =  "https://api.propublica.org/congress/v1/115/senate/sessions/1/votes/17.json";
 
  // "https://api.propublica.org/congress/v1/bills/search.json?query=megahertz";

  useEffect(() => {
  axios.get(apiUrl, {
    headers: {
  'X-API-Key': apiKey
    }
  })
    .then(response => {
      // Handle the response data
      // setBills(response.data.results[0].bills)
      console.log(response.data);
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
  }, []);
//response response.data.results bills.map()
  

  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/senate_chamber.jpeg)' }}>
        <div className="bg-blue-900 bg-opacity-75 p-8">
          {/* after making a fetch call to the senator collection in the db it will return an object with the firtst name last name img url and party affilitiaion set jsx with html create an image set the source equal to return object.image configure api to call our own source and plug it in  */}


          {/* comment this card out when youre done using it to populate the api into the page */}
        <div className='grid grid-rows-8 grid-cols-1 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <img className="items-center justify-center bg-center" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/190px-John_Cornyn_%28cropped%29.jpg' alt='chamber' /> 
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">John_Cornyn_ </h1>
           <ul className="text-lg text-white">
            <li> Party Affiliation </li>
           </ul>
         </div>
        </div>

{/* "https://api.propublica.org/congress/v1/115/senate/sessions/1/votes/17.json" api for getting yea/nay counts */}
        {/* this is the part where we return our bills/template */}
        <div className='grid grid-rows-8 grid-cols-1 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Bill Name </h1> 
           <ul className="text-lg text-white">
            <div>
            <li> A brief description of the bill </li> 
            <li> xx/yea - xx/nay </li> d yea/nay - r yea/nay
            <li> Result (118th Congress) </li> 
           </div>
           {/* )}
           {bills.map(bill => 
           {bill.bill_id[0]} */}

           </ul>
         </div>
        </div>
        {/* comment out everything below here when you're done using it to populate the api */}


       <div>
        <div className='grid grid-rows-10 grid-cols-4 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>

          {/* https://api.congress.gov/v3/member/L000174/sponsored-legislation?api_key=7JqeXnx57GmlOSkwahRXM6cia6X57mpXpdJ29n2v has to fill senators name in input query */}
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Sponsored Bills</h1>
           <ul className="text-lg text-white">
            <li><a href=''>Bill Name</a>  </li>
            <li> A brief description of the bill </li>
            <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
           </ul>
       </div>

       {/* https://api.congress.gov/v3/member/L000174/cosponsored-legislation?api_key=7JqeXnx57GmlOSkwahRXM6cia6X57mpXpdJ29n2v again needs the senators name */}
       <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
        <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Co-Sponsored Bills</h1>
         <ul className="text-lg text-white">
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
           <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
         </ul>
       </div>
       <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
        <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Yea</h1>
         <ul className="text-lg text-white">
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
           <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
         </ul>
       </div>
        <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
         <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Nay</h1>
          <ul className="text-lg text-white">
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
           <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
          </ul>
       </div>
        </div>
         </div>
       </div>
       </div>
    );
};

export default Bills;
