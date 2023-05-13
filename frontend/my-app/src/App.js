import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';
import './CSS/Signup.css';
import './CSS/Login.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
