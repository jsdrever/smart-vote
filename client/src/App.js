import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
// import SearchBar from './components/SearchBar';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Senators from './components/pages/Senators';
import Bills from './components/pages/Bills';
import NotFound from './components/pages/NotFound';
import Donation from './components/pages/Donation';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  // const [issues, setIssues] = useState([]);

  // useEffect(() => {
  //   document.title = 'GitHub issues';
  // }, []);

  // const getRepoIssues = (repo) => {
  //   let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
  //   console.log('issuesURL', issuesURL);
  //   fetch(issuesURL)
  //     .then((res) => res.json())
  //     .then((response) => setIssues(response));
  // };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Navbar />
          {/* <SearchBar onFormSubmit={getRepoIssues}/> */}
          <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
               <Route 
                path="/senators" 
                element={<Senators />} 
              />
               <Route 
                path="/bills" 
                element={<Bills />} 
              />
              <Route 
              path="*" 
              element={<NotFound />} 
              />
              <Route 
              path="/donation" 
              element={<Donation />} 
              />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
