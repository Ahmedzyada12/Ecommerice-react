import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

import Trendingproducts from './Components/Trendingproducts'
import { Route, Routes } from 'react-router-dom'
import TopCategories from './Components/TopCategories'
import Bigdiscount from './Components/Bigdiscount'
import MobileAccssiroies from './Components/MobileAccssiroies'
import Newlanch from './Components/Newlanch'
import Banner from './Components/Banner'
import Detailes from './Components/Detailes'
import detailesdata from './Components/detailesdata'
import Footer from './Components/Footer'





function App() {
  return (
    <div>
     
    
      <Routes>
     
      <Route path='/' element={ <Home/>}/>
      <Route path='//' element={<Navbar />}/>
      <Route path='/detalis/:id' element={<Detailes x={detailesdata}/>}/>
      <Route path='/' element={<Trendingproducts/>}/>
      <Route path='/' element={<TopCategories/>}/>
      <Route path='/' element={<Bigdiscount/>}/>
      <Route path='/' element={<MobileAccssiroies/>}/>
      <Route path='/' element={<Newlanch/>}/>
      <Route path='/' element={<Banner/>}/>
      </Routes> 
       
       <Footer/>
    
        
    </div>
  )
}

export default App