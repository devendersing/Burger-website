import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Hooks from './Components/Hooks/Hooks';
import Contact from './Components/Contact/Contact';
import slick from './Components/slick/slick';



export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Hooks' element={<Hooks/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
           <Route path='/slick' element={<slick/>}></Route>
            </Routes>
          <Footer/>

        </BrowserRouter>
      </div>
    )
  }
}
