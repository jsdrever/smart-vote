//! I want to link everyones githubs at the bottom to their name


import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4>&copy; TableFlip Coders {new Date().getFullYear()} <p> (┛ಠ_ಠ)┛彡┻━┻</p></h4>
      </div>
    </footer>
  );
};
export default Footer;
