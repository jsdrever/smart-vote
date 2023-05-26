//! Editing required

import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Senators from './pages/Senators';
import Bills from './pages/Bills';
import NotFound from './pages/NotFound';
import SearchResults from './pages/SearchResult';
import ShopPage from './pages/ShopPage'
import SignUp from './pages/Signup';
import Contact from './pages/NotFound';
import Navbar from './Navbar';
import Login from './pages/Login';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    // page with the selection of options
    if (currentPage === 'About') {
      return <About />;
      // congress --> House / Senate
    }
    if (currentPage === 'Senators') {
      return <Senators />;
      // tbd for every other link option
  }
    if (currentPage === 'Bills') {
      return <Bills />;
    }
    if (currentPage === 'Not-found') {
      return <NotFound />;
    }
    if (currentPage === 'Search-Results') {
      return <SearchResults />;
    }
    if (currentPage === 'Shop') {
      return <ShopPage />;
    }
    if (currentPage === 'Sign-Up') {
      return <SignUp />;
      // senators X and Y / Opposition X and Y
      
    }
    if (currentPage === 'Login') {
      return <Login />;
    }
    return <Contact />;
    // senator and the bills they've voted on page
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

