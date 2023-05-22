import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const SearchResult = ({ searchQuery }) => {
    // const navigate = useNavigate();
  
    // const handleGoBack = () => {
    //   navigate(-1);
    // };
    //! should i add a go back button?

    return (
<div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/senate_chamber.jpeg)' }}>
{/* <button className="px-4 py-2 mt-8 bg-white text-blue-900 rounded-lg focus:outline-none" onClick={handleGoBack}>
          Go Back
        </button> */}
        <div className="bg-blue-900 bg-opacity-75 p-8">
        <div className='grid grid-rows-8 grid-cols-1 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <img className="items-center justify-center bg-center" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/190px-John_Cornyn_%28cropped%29.jpg' alt='chamber'/> 
          {/* wikipedia has pictures of all the senators i wonder if there's a way to gain access also how do i center the image*/}
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">John_Cornyn_ </h1>
          {/* it would be kinda neat if the senators name was a hyperlink to their website */}
           <ul className="text-lg text-white">
            <li> Party Affiliation </li>
           </ul>
         </div>
        </div>
        {/* <div className='grid grid-rows-8 grid-cols-1 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Bill Name </h1>
           <ul className="text-lg text-white">
            <li> A brief description of the bill </li>
            <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
           </ul>
         </div>
        </div> */}
       <div>
        <div className='grid grid-rows-10 grid-cols-4 m-5'>
         <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
          <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Sponsored Bills</h1>
           <ul className="text-lg text-white">
           <li> Bill Name </li>
            <li> A brief description of the bill </li>
            <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
           </ul>
       </div>
       <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
        <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Co-Sponsored Bills</h1>
         <ul className="text-lg text-white">
         <li> Bill Name </li>
           <li> A brief description of the bill </li>
           <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
         </ul>
       </div>
       <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
        <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Yea</h1>
         <ul className="text-lg text-white">
         <li> Bill Name </li>
           <li> A brief description of the bill </li>
           <li> xx/yea - xx/nay </li>
            <li> Senate Vote #132 in 2023 (118th Congress) </li>
         </ul>
       </div>
        <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
         <h1 className="text-3xl font-bold text-white mt-10 text-decoration-line: underline font-extrabold text-center font-serif">Nay</h1>
          <ul className="text-lg text-white">
           <li> Bill Name </li>
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
    
    export default SearchResult;