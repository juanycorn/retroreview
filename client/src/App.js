import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApolloProviderWrapper from './apollo';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Games from './components/Games';
import SignUp from './components/SignUp';
import LandingPage from './components/Landingpage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import './components/Header.css';
import './components/Footer.css';

const App = () => (
  <ApolloProviderWrapper>
    <Router>
      <div className="parallax-bg">
        <Header />
        <main className='content' style={{ padding: '20px', flex: '1' }}>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/games' element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ApolloProviderWrapper>
);

export default App;
