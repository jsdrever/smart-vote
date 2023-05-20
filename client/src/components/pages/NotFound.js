import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = ({ searchQuery }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/thumb-1920-554598senate.jpg)' }}>
      <div className="bg-blue-900 bg-opacity-75 p-8">
        <h1 className="text-4xl font-bold text-white mt-10">No Matches Found</h1>
        <p className="text-lg text-white mt-4">
          Sorry, there were no matches for the search query: <span className="font-bold">{searchQuery}</span>.
        </p>
        <p className="text-lg text-white mt-4">
          Please try again with a different search term.
        </p>
        <button className="px-4 py-2 mt-8 bg-white text-blue-900 rounded-lg focus:outline-none" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;

