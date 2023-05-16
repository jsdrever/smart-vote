import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Navbar />
          {/* <Content /> */}
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
