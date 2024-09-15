import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Theme from './components/theme/Theme';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_container/HomeContainer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import './index.css'
import BusLayout from './components/BusLayOut/BusLayout';

function App() {

  return (
    <>
      <Router>
        <div className='flex flex-col w-full min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300'>
          <Navbar />
          
           <Routes>
            <Route path='/' element ={<HomeContainer/>} />
            <Route path='/login' element ={<Login/>} />
            <Route path='/Signup' element ={<Signup/>} />
            <Routes path='/admin' element ={<BusLayout/>} />
           </Routes>
         
          <Footer/>
        </div>
      </Router>
    
    </>
  )
}

export default App
