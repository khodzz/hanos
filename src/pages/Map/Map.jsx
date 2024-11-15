import React from "react";
import locationImg from "../../assets/location-point.svg";
import { Link } from "react-router-dom";
import "./Map.scss"

export default function Map() {
  return (
    <section className="Han-store">
      <div className="Han-store__container container">
        <div className="Han-store__cont">
          <h1 className="Han-store__title">HANOS Store</h1>
          <div className="Han-store__finder-search-input-container">
            <label className="Han-store__label">
              <p className="Han-store__label_title">Find a HANOS Store</p>
              <div className="Han-store__label_searchandbtn">
                <input 
                  className="Han-store__label_search" 
                  type="search" 
                  placeholder="City, postal code or address"
                />
                <button className="Han-store__label_search-btn">Search</button>
              </div>
            </label>
            <div className="Han-store__location">
              <img className="Han-store__location_img" src="locationImg" alt="loc" />
              <p className="Han-store__location_title">Use my current location</p>
            </div>
          </div>
          <div className="Han-store__list">
              <Link>
                <div className="Han-store__list_item">
                    Hanos Ameland
                    <br />
                    Open today until 17:00
                </div>
              </Link>
              <Link>
                <div className="Han-store__list_item">
                    Hanos Amsterdam
                    <br />
                    Open today until 20:00
                </div>
              </Link>
              <Link>
                <div className="Han-store__list_item">
                    Hanos Apeldoorn
                    <br />
                    Open today until 18:00
                </div>
              </Link>
              <Link>
                <div className="Han-store__list_item">
                    Hanos Den Haag Delft
                    <br />
                    Open today until 20:00
                </div>
              </Link>
              <Link>
                <div className="Han-store__list_item">
                    Hanos Doetinchem
                    <br />
                    Open today until 17:00
                </div>
              </Link>
          </div>
        </div>
        <div className="Han-store__map">
        <iframe className="Han-store__map_map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1157996.4128043773!2d4.30330026436182!3d51.34438516993045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shanos%20locations!5e0!3m2!1sru!2skg!4v1731642366353!5m2!1sru!2skg" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
