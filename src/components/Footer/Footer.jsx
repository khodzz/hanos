import React from "react";
import "./Footer.scss";
import logo from "../../assets/hanos-nl.svg";
import facebook from "../../assets/fecebook-img.svg";
import youtube from "../../assets/youtube-img.svg";
import linkedin from "../../assets/linkedin-img.svg";
import instagram from "../../assets/instagram-img.svg";
import pinterest from "../../assets/pintarest-img.svg";

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
                    Service
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                  Customer Service
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Opening hours
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <ul className="footer__col__ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                    Concepts
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Promotion and offers
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Formulas and concepts
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <ul className="footer__col_ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                    Organization
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    About HANOS
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    Frequently asked questions
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                    CSR
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__col">
              <ul className="footer__col_ul">
                <li className="ul__li">
                  <a className="li__link" href="">
                  Arrange immediately
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                  Become a customer
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                  Order online
                  </a>
                </li>
                <li className="ul__li">
                  <a className="li__link" href="">
                  Delivery
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
