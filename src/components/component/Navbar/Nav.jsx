import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../buttnBg/Button";
import man from "../../../assets/Application/man.png";
import git from "../../../assets/Application/Gits.png";
import { Link } from "react-router-dom";
function Nav(props) {
  return (
    <div className="container1">
      <div className="container">
        <div className="con1">
          <div>
            <Link to="/">
              <img src={git} alt="git" />
            </Link>
          </div>
          <div className="con2">
            <Link className="a1" to="/chooseGits">
              {" "}
              Gid yoki tarjimon tanlash
            </Link>
            <Link className="a1" to="/suggestions">
              Gid va tarjimonlar uchun{" "}
            </Link>
            <Link className="a1" to="/blog">
              Blog
            </Link>
            <Link to="/application">
              <Button button="Arizalarni ko'rish" />
            </Link>
          </div>
          <div className="come">
            <img className="img1" src={man} alt="m" />
            <Link className="a1" to="/authorization">
              Kirish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
