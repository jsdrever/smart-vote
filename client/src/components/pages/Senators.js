import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';

const Senators = () => {
  return (
    <body>
   <div>
    <h4 className='text-blue-900'>Alabama</h4>
    <ul className='space-y-4 text-red-800'>
      <li><a href=''>Senator Name</a></li>
      <li><a href=''>Senator Name</a></li>
    </ul>
   </div>

   <div>
    <h4 className='text-blue-900'>Alaska</h4>
    <ul className='space-y-4 text-red-800'>
      <li><a href=''>Senator Name</a> </li>
      <li><a href=''>Senator Name</a></li>
    </ul>
   </div>

   <div>
    <h4 className='text-blue-900'>Arizona</h4>
    <ul className='space-y-4 text-red-800'>
      <li>Senator Name</li>
      <li>Senator Name</li>
    </ul>
   </div>

   <div>
    <h4 className='text-blue-900'>Arkansas</h4>
    <ul className='space-y-4 text-red-800'>
      <li>Senator Name</li>
      <li>Senator Name</li>
    </ul>
   </div>

   <div>
    <h4 className='text-blue-900'>Alaska</h4>
    <ul className='space-y-4 text-red-800'>
      <li>Senator Name</li>
      <li>Senator Name</li>
    </ul>
   </div>

   <div>
    <h4 className='text-blue-900'>California</h4>
    <ul className='space-y-4 text-red-800'>
      <li>Senator Name</li>
      <li>Senator Name</li>
    </ul>
   </div>
   

    </body>
   
  )
};

export default Senators;
