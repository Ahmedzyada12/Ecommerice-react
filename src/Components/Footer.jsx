import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaSketch } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsEnvelopeFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
function Footer() {
  return (
<div>

{/* Footer */}
<footer className="card text-center text-lg-start bg-light text-muted mt-5">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
        <h4>Get connected with us on social networks:</h4>
      <span></span>

    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <a href='https://www.facebook.com/profile.php?id=100006457849031&mibextid=LQQJ4d' className="me-4 text-reset">
        <BsFacebook/>
      </a>
      <a href className="me-4 text-reset">
        <BsTwitter/>
      </a>
      <a href='#!' className="me-4 text-reset">
        <BsGoogle/>
      </a>
      <a href className="me-4 text-reset">
        <BsInstagram />
      </a>
      <a href className="me-4 text-reset">
        <BsLinkedin />
      </a>
      <a href className="me-4 text-reset">
        <BsGithub/>
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <FaSketch className="me-1"/> MATGARNA Store
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset text-decoration-none">electronics</a>
          </p>
          <p>
            <a href="#!" className="text-reset text-decoration-none">Mobail</a>
          </p>
          
          <p>
            <a href="#!" className="text-reset text-decoration-none">clothes</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
        
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div> */}
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><AiFillHome className='me-1'/> Egypt, New Dammita,</p>
          <p>
            <BsEnvelopeFill className='me-1'/>
            azyada299@gmail.com
          </p>
          <p><BsFillTelephoneFill /> + 01 234 567 88</p>
          
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold text-decoration-none" href="https://www.facebook.com/profile.php?id=100006457849031&mibextid=LQQJ4d/">Ahmed Zyada</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}
</div>
  )
}

export default Footer






