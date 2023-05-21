import React, { useState } from "react";
import detailesdata from "./detailesdata";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

function Detailes() {
  const [counter, setCounter] = useState(0);
  function countUp() {
    setCounter(counter + 1);
  }

  const params = useParams();

  return (
    <div>
      <header className="py-2 ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {" "}
              MATGA<span>RNA</span> <FaListUl />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <form className="container">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  {" "}
                  <BiSearch />
                  <i className="fa fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#Trending product">
                        Trending product
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#Top Categories">
                        Top Categories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#Big Discounts">
                        Big Discounts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#Mobile Phones">
                        Mobile Phones
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#!">
                    {" "}
                    <FaShoppingCart className="text-black cart" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!">
                    {" "}
                    <span class="badge bg-dark text-white ms-1 mt-2 rounded-pill">
                      {counter}
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2" href="#!">
                    0.0$
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {detailesdata.map((item) => {
        if (item.id == params.id) {
          return (
            <section className="py-5" id="detials">
              <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                  <div className="col-md-6 ">
                    <img
                      className="card-img-top mb-5 mb-md-0"
                      src={item.img}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h1 className="display-5 fw-bolder"></h1>
                    <div className="fs-5 mb-5">
                      <span>{item.price} </span>
                    </div>
                    <h2 className="lead">{item.name} </h2>
                    <p className="lead"> {item.discription}</p>
                    <div className="d-flex">
                      <button
                        className="btn btn-outline-dark flex-shrink-0"
                        onClick={countUp}
                        type="button"
                      >
                        <i className="bi-cart-fill me-1" />
                        Add to cart
                      </button>
                      <div
                        className="card p-1  text-center ms-2 rounded-3"
                        style={{ maxWidth: "3rem" }}
                      >
                        <h4>{counter}</h4>
                      </div>
                      <a href="#!">
                        <FaShoppingCart className="text-black  mt-1 cart1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })}
    </div>
  );
}

export default Detailes;
