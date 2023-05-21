import React from "react";
import { Link } from "react-router-dom";
import Trending_products from "./Trending_products";

function Trendingproducts() {
  return (
    <section className="container" id="Trending products">
      <h2 className="mt-5">Trending products</h2>
      <hr className="w-25" />

      <ul className="cards">
        {Trending_products.map((prod) => {
          return (
            <li className="card" key={prod.id}>
              <div>
                <h4 className="card-title">{prod.name}</h4>
                <div className="card-content">
                  <img src={prod.img} alt="" />
                  <p>{prod.discription}</p>
                </div>
              </div>
              <div className="card-link-wrapper">
                <Link to={`/detalis/${prod.id}`} className="card-link">
                  view detailes{" "}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Trendingproducts;
