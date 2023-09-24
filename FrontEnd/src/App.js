import './App.css';
import React from 'react';
import Home from './component/homapage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scholarship from './component/scholership';
import ContactForm from './component/contact';
import Resource from './component/resource';
import Mentors from './component/mentor';
import Connect from './component/connect';
import Header from './component/header';
const App = () => {
  return (
    <Router>

<Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scholarship' element={<Scholarship />} />
        <Route path='/resource' element={<Resource />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/mentors' element={<Mentors />} />      </Routes>
    </Router>


  )
}

export default App;