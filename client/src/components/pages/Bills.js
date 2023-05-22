import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
import { QUERY_MATCHUPS } from '../../utils/queries';
import React, { useState, useEffect } from 'react';

//! needs to create cards like these for each corresponding bill / senator

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('https://api.placeholder.com/bills'); // replace with actual API endpoint
        const data = await response.json();
        setBills(data);
      } catch (error) {
        console.error('Error fetching bills:', error);
      }
    };

    fetchBills();
  }, []);
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


        {/* this is the part where we return our bills/template */}
        <div className='grid grid-rows-8 grid-cols-1 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Bill Name </h1>
           <ul className="text-lg text-white">
            <li> A brief description of the bill </li>
            <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
           </ul>
         </div>
        </div>
        {/* comment out everything below here when you're done using it to populate the api */}


       <div>
        <div className='grid grid-rows-10 grid-cols-4 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Sponsored Bills</h1>
           <ul className="text-lg text-white">
            <li><a href=''>Bill Name</a>  </li>
            <li> A brief description of the bill </li>
            <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
           </ul>
       </div>
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
