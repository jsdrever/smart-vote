//! Editing required

import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

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
    if (currentPage === 'TBD') {
      return <TBD />;
      // tbd for every other link option
  }
    if (currentPage === 'Blog') {
      return <Blog />;
      // senators X and Y / Opposition X and Y
 
    return <Contact />;
    // senator and the bills they've voted on page
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
