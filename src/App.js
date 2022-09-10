import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Form from './pages/form';
import Redirect from './pages/redirect';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/form' exact element={<Form/>} />
      <Route path='/' exact element={<Home/>} />
      <Route path='/redirect' exact element={<Redirect/>} />

    </Routes>
  </Router>
  );
}



export default App;
