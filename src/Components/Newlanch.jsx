import React from "react";
// import mobiledata from './mobiledata';
import Nlanch from "./Nlanch";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

function Newlanch() {
  return (
    <div>
      <section id="New Produtes">
        <div className="container">
          <div className="row">
            <h2 className="mobail-h2">New Produtes This Month</h2>

            {Nlanch.map((prod) => {
              return (
                <div className="col-md-3">
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

            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newlanch;
