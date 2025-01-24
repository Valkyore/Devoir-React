
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";

import Réalisations from "./pages/Réalisations";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Mentions from "./pages/Mentions";
import Johndoe from "./pages/Johndoe";

function App() {
  
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Réalisations" element={<Réalisations/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Mentions" element={<Mentions/>}></Route>
        <Route path="/Johndoe" element={<Johndoe/>}></Route>
      </Routes>
      
      <Footer/>

    </div>
  );
}

export default App;
