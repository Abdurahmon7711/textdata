import React, { useState } from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../buttnBg/Button";
import man from "../../../assets/Application/man.png";
import git from "../../../assets/Application/Gits.png";
import { Link } from "react-router-dom";

function Nav(props) {
  const [open, setOpen] = useState(false);

  function open1() {
    setOpen(!open);
  }

  return (
    <div className="container1">
      <div className="container">
        <div className="con1">
          <div className="logo01">
            <Link to="/">
              <img className="logo" src={git} alt="git" />
            </Link>
          </div>

       {
         open ? 
         <div className="media1">
         <div className={open ? "openmenu con2 " : "con2"}>
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
           <Link className="a1" to="/application">
             Arizalarni ko'rish
           </Link>
         </div>
         <div className={open ? "openmenu come " : "come"}>
           <Link className="a13" to="/authorization">
             <img className="img10" src={man} alt="m" />
             Kirish
           </Link>
         </div>
       </div>
        :
        ""
       }

          <div className=  "con2" >
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
            <Link className="a1" to="/application">
              Arizalarni ko'rish
            </Link>
          </div>
          <div className= "come" >
            <Link className="a13" to="/authorization">
              <img className="img10" src={man} alt="m" />
              Kirish
            </Link>
          </div>

          <div className="bass" onClick={open1}>
            <i class="basss fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;