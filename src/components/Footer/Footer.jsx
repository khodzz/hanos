import React from "react";
import "./Footer.scss";
import logo from "../../assets/hanos-nl.svg";
import facebook from "../../assets/facebook-img.webp";
import youtube from "../../assets/youtube-img.png";
import linkedin from "../../assets/linkedin-img.png";
import instagram from "../../assets/instagram-img.png";
import pinterest from "../../assets/pinterest.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__background">
        <div className="container footer__container">
          <div className="footer__row">
            <div className="footer__col">
              <ul className="footer__col_ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                    Services
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Klantensevice
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Bezoging
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Openingstijden
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Heroca applicaties
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <ul className="footer__col__ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                    Concepten
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Acties en voordeel
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Masterclasses
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Formules en concepten
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    FoodXperience
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    HANOS Kerstapkketten
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <ul className="footer__col_ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                    Organistie
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    over HANOS
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Werken bij HANOS
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Veelgestelde vragen
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    MVO
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <ul className="footer__col_ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                    Direct Regelen
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Klan Worden
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Online bestellen
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Nieuwbrief aanvragen
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Bezoging
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container2">
        <div className="row">
          <img
            src={facebook}
            alt=""
            className="col-img"
          />
          <img
            src={youtube}
            alt=""
            className="col-img"
          />
          <img
            src={linkedin}
            alt=""
            className="col-img"
          />
          <img
            src={instagram}
            alt=""
            className="col-img"
          />
          <img
            src={pinterest}
            alt=""
            className="col-img"
          />
        </div>
        <img width={290} src={logo} alt="" />
        <div className="footer__row2">
          <h4 className="footer__info">Algemene voorwaarden</h4>
          <h4 className="footer__info">Cookie</h4>
          <h4 className="footer__info">Privcy Statement</h4>
          <h4 className="footer__info">Disclaimer</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
