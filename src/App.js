import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './screen/Home/Home';
import About from './screen/About/About';
import Header from './common/Header/Header';
import Contact from './screen/Contact/Contact';
import Footer from './common/Footer/Footer';


function App() {
  return (
    <div>
     <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
