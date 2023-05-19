import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../../utils/mutations';
import { QUERY_MATCHUPS } from '../../utils/queries';

const Bills = () => {
    return (
        <body>
        <div>
         <h4 className='text-blue-900'>Sponsored Bills</h4>
         <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a></li>
         </ul>
        </div>
        <div>
         <h4 className='text-blue-900'>CoSponsored Bills</h4>
         <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a></li>
         </ul>
        </div>
        <div>
         <h4 className='text-blue-900'>Nay Bills</h4>
         <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a></li>
         </ul>
        </div>
        <div>
         <h4 className='text-blue-900'>Yea Bills</h4>
         <ul className='space-y-4 text-red-800'>
           <li><a href=''>Bill Name</a></li>
         </ul>
        </div>
        </body>
    )
};

export default Bills;
