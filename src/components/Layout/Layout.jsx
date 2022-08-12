import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../../views/Home/Home';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
