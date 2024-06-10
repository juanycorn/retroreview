//import React from 'react'; imported but not used
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';
import './styles/Footer.css';

import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  createHttpLink 
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
