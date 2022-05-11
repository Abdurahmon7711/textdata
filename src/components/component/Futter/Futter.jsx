import React from "react";
import "./Futter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import telegram from "../../../assets/Application/Telegram.png";
import facebook from "../../../assets/Application/Facebook.png";
import instagram from "../../../assets/Application/Instagram.png";
import { Link } from "react-router-dom";

function Futter() {
  return (
    <div className="container2">
      <div className="container">
            <div className="con-1">
                <div className="aboutInfo">
                    <h3>Bizning servis</h3>
                    <Link to="/chooseGits">
                    <p className="p__text">Git yoki tarjimon tanlash</p>
                    </Link>
                    <Link to="/suggestions">
                    <p className="p__text">Gid va tarjimonlar uchun </p>
                    </Link>
                    <Link to="/aboutPlatform">
                    <p className="p__text">Platforma haqida</p>
                    </Link>
                    <Link to="/blog">
                    <p className="p__text">Blog</p>
                    </Link>
                </div>
                <div className="contactInfo">
                    <Link to="/contacts">
                    <h3 className="p__text">Kontaktarimiz</h3>
                    </Link>
                    <Link to="/contacts">
                    <p className="p__text">salom@gits.uz</p>
                    </Link>
                    <a className="p__text" href="tel:+998 90 123 45 67">
                    <p className="p__text">+998 90 123 45 67</p>
                    </a>
                    <Link to="/contacts">
                    <p className="p__text">Savol jo’natish</p>
                    </Link>
                </div>
                <div className="lawInfo">
                    <h3>Huquqiy ma’lumotlar</h3>
                    <p>Foydalanish shartlari</p>
                    <p>Maxfiylik siyosati va cookie siyosati</p>
                </div>
            </div>
            <div className="link">
                <Link to="/">
                    <img className="t1" src={telegram} alt="" />
                    <img className="t1" src={facebook} alt="" />
                    <img className="t1" src={instagram} alt="" />
                </Link>
            </div>
        </div>
      <div className="con-2">
        <p>Copyright 2021 Gits.uz - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Futter;
