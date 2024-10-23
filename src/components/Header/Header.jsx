import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import locationImg from "../../assets/location-point.svg";
import { IoPersonAddOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-top">
          <div className="header__nav_left-side">
            <ul className="first-ul">
              <li className="header__nav_link">
                <a href="">About HANOS</a>
              </li>
              <li className="header__nav_link">
                <a href="">Our partners</a>
              </li>
            </ul>
          </div>

          <div className="header__nav_right-side">
            <ul className="header__nav_right-side_ul">
              <li>Customer Service</li>
              <li>Login</li>
              <li>
                <label className="nl">
                  <select name="selectedFruit">
                    <option value="nl">en</option>
                    <option value="en">ru</option>
                  </select>
                </label>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="top">
        <div className="containers">
          <div className="cont">
            <div className="logo-searcher">
              <img className="logo" src={logo} alt="" />
              <label className="search_btn">
                <input
                  className="search"
                  type="search"
                  placeholder="Vind uw product"
                />
                <button className="search-btn">Search</button>
              </label>
            </div>

            <div className="header__info">
              <div className="locations">
                <img className="location__img" src={locationImg} alt="" />
                <a className="location__link" href="">
                  Find a store
                  <span className="location__link_span">
                    Find your HANOS store
                  </span>
                </a>
              </div>

              <div className="add-admin">
                <IoPersonAddOutline className="icons" />

                <a className="user-admin-add_link" href="">
                  Klant worden{" "}
                  <span className="user-admin-add_link_span">
                    Registreer u vandaag
                  </span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ass-searcher">
        <div className="assertiments">Assortment</div>

        <label className="ass-searcher__search_btn">
          <input
            className="ass-searcher__search"
            type="search"
            placeholder="find your product"
          />
          <button className="search-btn">Search</button>
        </label>
      </div>
      <hr className="phone-hr" />

      <div className="containers contaner-bottom">
        <ul className="ul_bottom">
          <li id="first" className="li_bottom">
            Promotions
          </li>
          <li className="li_bottom">Vegetables & fruit</li>
          <li className="li_bottom">Convenience</li>
          <li className="li_bottom">Frozen</li>
          <li className="li_bottom">Beverages</li>
          <li className="li_bottom">Dry grocerice</li>
          <li className="li_bottom">Cheese</li>
          <li className="li_bottom">Non-food</li>
          <li className="li_bottom">Patisserie</li>
          <li className="li_bottom">Fish</li>
          <li className="li_bottom">Meat</li>
          <li className="li_bottom">Game & poultry</li>
          <li className="li_bottom">dairy & egg</li>
        </ul>
      </div>
      <hr />
    </header>
  );
};

export default Header;
