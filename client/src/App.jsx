//import React from 'react'; imported but not used
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
import GameDetail from './components/GameDetail';
import GameCarousel from './components/GameCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
//import './styles/Header.css'; we do not have a header.css
import './styles/Footer.css';

const App = () => (
  <ApolloProviderWrapper>
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:slug" element={<GameDetail />} />
            <Route path="/carousel" element={<GameCarousel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ApolloProviderWrapper>
);

export default App;
