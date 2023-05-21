import React from "react";
import { Link } from "react-router-dom";
import mobiledata from "./mobiledata";
import { FaShoppingCart } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function MobileAccssiroies() {
  return (
    <div>
      <section id="Mobile Phones">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="bottom_nav_content ">
                <div className="all_category_wrapper">
                  <div className=" category ">
                    <div
                      className="card  py-3 "
                      style={{ maxWidth: "18rem", marginTop: 150 }}
                    >
                      <div className="card-header">
                        {" "}
                        <FaListUl /> All Brands
                      </div>
                      <div className="card-body ">
                        <ul>
                          <li>
                            <a href="#!">Apple</a>
                          </li>
                          <li>
                            <a href="#!">Samasung</a>
                          </li>
                          <li>
                            <a href="#!">Oppo</a>
                          </li>
                          <li>
                            <a href="#!">Vivo</a>
                          </li>
                          <li>
                            <a href="#!">Redimi</a>
                          </li>
                          <li>
                            <a href="#!">Sony</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8" id="Mobile Phones">
              <h2 className="mobail-h2">Mobile Phones</h2>
              <hr className="w-25" />
              <div className="row ">
                {mobiledata.map((prod) => {
                  return (
                    <div className="col-md-3" key={prod.id}>
                      <div className="card mt-2">
                        <img src={prod.img} alt />
                        <h5>{prod.name}</h5>
                        <p>
                          {" "}
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <i className="fa fa-star " />
                        </p>
                        <h6>
                          {prod.price}${" "}
                          <Link to={`/detalis/${prod.id}`}>
                            <FaShoppingCart className="float-end text-warning ShoppingCart" />
                          </Link>
                        </h6>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MobileAccssiroies;
