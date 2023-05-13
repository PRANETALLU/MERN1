import React from 'react';
import { Route, Routes, BrowserRouter } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
