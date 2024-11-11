import React, { useContext, useState } from 'react'
import "./Menu.scss"
import { CiLocationOn } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import logo from "../../assets/logo.png";
// import {StoreContext} from "../../context/StoreContext"

const Menu = () => {

  // const {closeModal} = useContext(StoreContext)

  return (
    <div className='menu'>
        <div className="menu__container">
            <div className="menu__logo-close">
                <div className="menu__logo"><img width={130} src={logo} alt="" /></div>
                
                
                {/* <div className="menu__close" onClick={closeModal}>X</div>  */}
                
            </div>
            <div className="menu__content">
                <a href='#' className="menu__text">FoodXperience</a>
                <a href='#' className="menu__text">Livestreams</a>
                <a href='#' className="menu__text"><CiLocationOn /> Find a store </a>
            </div>
            <div className="menu__btns">
                <div className="menu__login-btn">Login</div>
                <div className="menu__registration-btn">Become a costomer</div>
            </div>
            <div className="menu__about">
                <div className="menu__about-us">About Hanos</div>
                <div className="menu__about-us">Our partners</div>
            </div>
            <label className="nl">
              <select name="selectedFruit">
                <option value="nl">en</option>
                <option value="en">ru</option>
              </select>
            </label>
            <div className="menu__costom"><TiMessages /> Costomer servise</div>
        </div>
    </div>
  )
}

export default Menu
