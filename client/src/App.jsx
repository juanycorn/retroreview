import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';
import './styles/Footer.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});



const App = () => {
  return (
  <ApolloProvider client={client}>
      <div className="app-container">
        <Header />
        <main className="content">
          <Outlet/>
        </main>
        <Footer />
      </div>
  </ApolloProvider>
)};

export default App;
