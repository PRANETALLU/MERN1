import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Create from './pages/Create';
import PostPage from './pages/PostPage';
import EditPage from './pages/EditPage';
import './CSS/Header.css';
import './CSS/Main.css';
import './CSS/Footer.css';
import './CSS/Signup.css';
import './CSS/Login.css';
import './CSS/Post.css';
import './CSS/Create.css';
import './CSS/PostPage.css';
import UserContextProvider from './components/UserContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create" element={<Create />} />
            <Route path="/post/:id" element={<PostPage/>} />
            <Route path="/edit/:id" element={<EditPage/>} />
          </Routes>
        </UserContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
