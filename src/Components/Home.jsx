
import React from 'react'
import Slide from './Slide'


import { FaListUl } from 'react-icons/fa';
import Trendingproducts from './Trendingproducts';
import TopCategories from './TopCategories';
import Bigdiscount from './Bigdiscount';
import MobileAccssiroies from './MobileAccssiroies';
import Newlanch from './Newlanch';
import Banner from './Banner';
import Navbar from './Navbar';




function Home() {
  return (
    <div>
      
      <section>
        <Navbar/>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="bottom_nav_content ">
          <div className="all_category_wrapper">
            <div className=" category ">
              <div className="card mt-5 py-3 " style={{maxWidth: '18rem'}}>
                <div className="card-header"> <FaListUl/> All Categories</div>
                <div className="card-body ">
                  <ul>
                    <li><a href="#!">Computer</a></li>
                    <li><a href="#Trending products">T products</a></li>
                    <li><a href="#Mobile Phones">Mobile</a></li>
                    <li><a href="#New Produtes">N Produtes</a></li>
                    <li><a href="#!">Watch</a></li>
                    <li><a href="#!">Accessories</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-8 mt-4 ">
      <div class="container">
        <Slide/>
        
      
         </div>
          </div>
    </div>
    </div>
    
    </section>
    <Trendingproducts/>
    <TopCategories/>
    <Bigdiscount/>
    <MobileAccssiroies/>
    <Newlanch/>
    <Banner/>
     
    </div>
  )
}

export default Home


