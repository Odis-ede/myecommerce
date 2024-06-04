import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';
import Page from './Pages/Page';
import LoginSignup from './Pages/LoginSignup';



function App () {
    return(
        <div>
          <BrowserRouter>
          <Navbar/> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/page' element={<Page/>}/>
              <Route path=':pageId' element={<Page/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/cart' element={<Cart/>}/>

           
            

            </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;
