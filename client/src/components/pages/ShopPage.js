import React from 'react';

const ShopPage = ({ politicians }) => {
  return (
    <div>
      <h2>Politician Shop</h2>
      <ul>
        {politicians.map((politician) => (
          <li key={politician.id}>
            <h3>{politician.name}</h3>
            <p>{politician.party}</p>
            <p>{politician.votingHistory}</p>
            {/* Add any additional information or UI elements for the politician */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopPage;
