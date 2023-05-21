import React from "react";
import bigdis from "./Bigdis";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Bigdiscount() {
  return (
    <div>
      {/* {
  console.log(props)
} */}

      <section className="container" id="Big Discounts">
        <div className="heading-left">
          <i className="fa-solid fa-gift" />
          Big Discounts
        </div>
        <hr className="w-25" />
        <div className="row">
          {bigdis.map((prod) => {
            return (
              <div className="col-md-2" key={prod.id}>
                <div className="card mt-2">
                  <img src={prod.img} alt="" />
                  <h3 className="tleft">{prod.name} </h3>
                  <h3 className="lprice">
                    {prod.price}
                    <Link to={`/detalis/${prod.id}`}>
                      <FaShoppingCart className="float-end text-light" />
                    </Link>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Bigdiscount;
