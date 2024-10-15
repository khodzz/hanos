import React, { useState } from 'react';
import "./header.scss";

const Header = () => {
  // состояние для отслеживания, открыто ли меню
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения меню
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className='header'>
      <div className="container">
        <nav className="nav">
          <div className="header__nav_left-side">
            <ul className='first-ul'>
              <li className="header__nav_link"><a href="">Over HANOS</a></li>
              <li className="header__nav_link"><a href="">Folders</a></li>
              <li className="header__nav_link"><a href="">Nieuwsbriief</a></li>
              <li className="header__nav_link"><a href="">Evenementen</a></li>
              
              {/* Исправлено: кнопка */}
              <button onClick={toggleMenu} className="dropdown-button">Onze partners</button>
              
              {/* Условный рендеринг меню */}
              {isOpen && (
                <ul className='dropmenu'>
                  <li className='dropdownmenu-link'><a href="">Fourcroy Nederland</a></li>
                  <li className='dropdownmenu-link'><a href="">Gastroloods</a></li>
                  <li className='dropdownmenu-link'><a href="">Jan van As Versvishandel</a></li>
                  <li className='dropdownmenu-link'><a href="">Kaja Interieurs</a></li>
                  <li className='dropdownmenu-link'><a href="">Studio Senses</a></li>
                  <li className='dropdownmenu-link'><a href="">Van der Zee horecaslager</a></li>
                  <li className='dropdownmenu-link'><a href="">Ebo van den Bor</a></li>
                  <li className='dropdownmenu-link'><a href="">HANOS Shop</a></li>
                  <li className='dropdownmenu-link'><a href="">Van Gestel Grootkeukentechniek</a></li>
                  <li className='dropdownmenu-link'><a href="">HANOS Kerstpakketten</a></li>
                  <li className='dropdownmenu-link'><a href="">Distrivers</a></li>
                </ul>
              )}
              
              <li className="header__nav_link"><a href="">Concepten</a></li>
            </ul>
          </div>
          
          <div className="header__nav_right-side">
            <ul className="header__nav_right-side_ul">
              <li>Klantenservice</li>
              <li>Inloggen</li>
              <li>nl</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
