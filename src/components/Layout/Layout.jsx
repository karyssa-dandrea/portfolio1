import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../views/Home/Home';
import AboutMe from '../../views/About/AboutMe';

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
