import { useEffect } from "react";
import { Outlet, redirect, useLocation } from "react-router-dom";
import "../../scss/pages/Collections/Collections.scss";

export default function Collections() {
  let location = useLocation().pathname.split("/");
  location = location[location.length - 1];

  console.log(location);

  const goToAll = () => {
    redirect("/collections/all");
  };

  const goToOral = () => {
    redirect("/collections/oral-care");
  };

  return (
    <div className="collection-main">
      <div className="collection-banner-container">
        <div className="collection-banner-content">
          <h1>All Products</h1>
          <p>Build your own plastic-free routine</p>
        </div>
      </div>
      <div className="collection-stuff-container">
        <div className="collection-side-menu-container">
          <h3>Collections</h3>
          <ul>
            <li
              className={location === "all" ? "collection-menu-selected" : ""}
              onClick={goToAll}
            >
              All Products
            </li>
            <li
              className={
                location === "oral-care" ? "collection-menu-selected" : ""
              }
              onClick={goToOral}
            >
              Oral Care
            </li>
            <li>Personal Care</li>
            <li>Gift Sets</li>
            <li>Bundles</li>
          </ul>
        </div>
        <div className="collection-products-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
