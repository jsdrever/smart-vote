//! Needs a logo at the top next the the title. 

import React from 'react';

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <h1 className="m-0" style={{ fontSize: '3rem' }}>
          Informed Vote
        </h1>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        (┛ಠ_ಠ)┛彡┻━┻
        </p>
      </div>
    </header>
  );
};

export default Header;
