import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_MATCHUPS } from '../utils/queries';

const Bills = () => {
    return (
        <>This is the bills page!</>
    )
};

export default Bills;
