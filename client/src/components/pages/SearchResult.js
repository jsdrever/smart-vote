import React from 'react';

const SearchResult = ({ politicians }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {politicians.length > 0 ? (
        <ul>
          {politicians.map((politician) => (
            <li key={politician.id}>
              <h3>{politician.name}</h3>
              <p>{politician.party}</p>
              <ul>
                {politician.votingHistory.map((vote) => (
                  <li key={vote.id}>
                    <span>{vote.issue}</span>
                    <span>{vote.result}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No politicians found.</p>
      )}
    </div>
  );
};

export default SearchResult;