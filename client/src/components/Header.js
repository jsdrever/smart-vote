import React from 'react';
import logo from './assets/images/informedvoterlogo50.png';

function Header() {
  return (
    <header className="bg-blue-900 text-white h-16 flex items-center justify-center">
      <h1 className="text-2xl font-bold">Informed Voter!</h1>
      <img src={logo} alt="Logo" className="h-12 w-12 rounded-full mx-2" />
    </header>
  );
}

export default Header;
