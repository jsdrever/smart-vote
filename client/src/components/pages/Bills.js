import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
import { QUERY_MATCHUPS } from '../../utils/queries';
import React, { useState } from 'react';
//! needs to create cards like these for each corresponding bill of the senator
//! Make a card to show the senator and his name
const Bills = () => {
    return (
        <body>
          <div className='grid grid-rows-8 grid-cols-1 m-5'>
          <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
    <h1 className='text-blue-900 text-decoration-line: underline font-extrabold text-center font-serif'>Senator Name</h1>
    <ul className='space-y-4 text-red-800'>
           <li> Current term </li>
           <li> Party Affiliation </li>
    </ul>
   </div>
          </div>
        <div>
        <div className='grid grid-rows-10 grid-cols-5 m-5'>
   <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
    <h1 className='text-blue-900 text-decoration-line: underline font-extrabold text-center font-serif'>Sponsored Bills</h1>
    <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
    </ul>
   </div>
   <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
    <h1 className='text-blue-900 text-decoration-line: underline font-extrabold text-center font-serif'>Co-Sponsored Bills</h1>
    <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
    </ul>
   </div>
   <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
    <h1 className='text-blue-900 text-decoration-line: underline font-extrabold text-center font-serif'>Yea</h1>
    <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
    </ul>
   </div>
   <div className='max-w-sm rounded shadow-md border-4 border-red-800 my-5 ml-5 mb-5'>
    <h1 className='text-blue-900 text-decoration-line: underline font-extrabold text-center font-serif'>Nay</h1>
    <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a>  </li>
           <li> A brief description of the bill </li>
    </ul>
   </div>

         </div>
        </div>
        </body>
    )
};

export default Bills;
