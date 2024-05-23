import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import ApolloProviderWrapper from './apollo';
import Items from './components/Games';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Games from './components/Games';
import './index.css';
import './components/Header.css';
import './components/Footer.css';

const App = () => (
  <ApolloProviderWrapper>
    <Router>
      <div className="App">
        <Header />
        <main style={{ padding: '20px', flex: '1' }}>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Items />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Games' element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ApolloProviderWrapper>
);

export default App;
