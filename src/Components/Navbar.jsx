import React from 'react'
import { FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
function Navbar() {


  return (
  
  <div>
    <header className="py-2 ">
  <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <Link className="navbar-brand" to="/"> MATGA<span>RNA</span> <FaListUl/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <form className="container">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1"> <BiSearch/><i className="fa fa-search" /></span>
          <input type="text" className="form-control  " placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Other
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#Trending product">Trending product</a></li>
              <li><a className="dropdown-item" href="#Top Categories">Top Categories</a></li>
              <li><a className="dropdown-item" href="#Big Discounts">Big Discounts</a></li>
              <li><a className="dropdown-item" href="#Mobile Phones">Mobile Phones</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#!"> <FaShoppingCart className='text-black cart'/></a>
          </li>
          <li className="nav-item">
            <a href="#!"> <span class="badge bg-dark text-white ms-1 mt-2 rounded-pill">0</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#!">0.0$</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  </div>


  )
}

export default Navbar