import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css'
import ContactWidget from './components/ContactWidget';

import About from './components/About';
import Careers from './components/Career';
import OrderForm from './components/Orderform';
import Technology from './pages/Technology';
import Demo from './components/Demo';
import Blogss from './components/Blogss';
import ProductDetails from './components/ProductDetails';



// const Home = () => <div className="pt-20 text-center">Home Page</div>;
// const About = () => <div className="pt-20 text-center">About Page</div>;
// const Contact = () => <div className="pt-20 text-center">Contact Page</div>;
// const Category1 = () => <div className="pt-20 text-center">Category 1 Page</div>;
// const Category2 = () => <div className="pt-20 text-center">Category 2 Page</div>;


const App = () => {
  return (
    <>
      <Header />
      <ContactWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/order" element={<OrderForm/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/blogs" element={<Blogss/>}/>
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* // /> */}


        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/category2" element={<Category2 />} /> */}
      </Routes>
    </>
  );
};

export default App;
