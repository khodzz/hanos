import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import user from "../../assets/user-ico.png";
import locationImg from "../../assets/location-point.svg";
import { IoPersonAddOutline } from "react-icons/io5";

const Header = () => {
  // состояние для отслеживания, открыто ли меню
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения меню
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [""];

  return (
    <header className="header">
      <div className="container">
        <nav className="nav-top">
          <div className="header__nav_left-side">
            <ul className="first-ul">
              <li className="header__nav_link">
                <a href="">Over HANOS</a>
              </li>
              <li className="header__nav_link">
                <a href="">Folders</a>
              </li>
              <li className="header__nav_link">
                <a href="">Nieuwsbriief</a>
              </li>
              <li className="header__nav_link">
                <a href="">Evenementen</a>
              </li>

              {/* Исправлено: кнопка */}
              <button onClick={toggleMenu} className="dropdown-button">
                Onze partners
              </button>

              {/* Условный рендеринг меню */}
              {isOpen && (
                <ul className="dropmenu">
                  <li className="dropdownmenu-link">
                    <a href="">Fourcroy Nederland</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Gastroloods</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Jan van As Versvishandel</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Kaja Interieurs</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Studio Senses</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Van der Zee horecaslager</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Ebo van den Bor</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">HANOS Shop</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Van Gestel Grootkeukentechniek</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">HANOS Kerstpakketten</a>
                  </li>
                  <li className="dropdownmenu-link">
                    <a href="">Distrivers</a>
                  </li>
                </ul>
              )}

              <li className="header__nav_link">
                <a href="">Concepten</a>
              </li>
            </ul>
          </div>

          <div className="header__nav_right-side">
            <ul className="header__nav_right-side_ul">
              <li>Klantenservice</li>
              <li>Inloggen</li>
              <li>
                <label className="nl">
                  <select name="selectedFruit">
                    <option value="nl">nl</option>
                    <option value="en">en</option>
                    <option value="dt">dt</option>
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
                <button className="search-btn">Zoeken</button>
              </label>
            </div>

            <div className="info">
              <div className="locations">
                <img className="location__img" src={locationImg} alt="" />
                <a className="location__link" href="">
                  Groothandels
                  <span className="location__link_span">
                    Vind uw groothande
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
      <div className="container contaner-bottom">
        <ul className="ul_bottom">
          <li id="first" className="li_bottom">
            Acties
          </li>
          <li className="li_bottom">AGF</li>
          <li className="li_bottom">Convenience</li>
          <li className="li_bottom">Diepvrier</li>
          <li className="li_bottom">Dranken</li>
          <li className="li_bottom">DKW</li>
          <li className="li_bottom">Kaas</li>
          <li className="li_bottom">Non-food</li>
          <li className="li_bottom">Patisserie</li>
          <li className="li_bottom">Vis</li>
          <li className="li_bottom">Vlees</li>
          <li className="li_bottom">Wild & Gevogelte</li>
          <li className="li_bottom">Zuivel & ei</li>
          <li className="li_bottom">Uitgelicht</li>
          <li className="li_bottom">FoodXperience</li>
        </ul>
      </div>
      <hr />
    </header>
  );
};

export default Header;
