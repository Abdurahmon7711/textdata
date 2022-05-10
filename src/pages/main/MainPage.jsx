import React from "react";
import AdvancedSearch from "../../components/templets/AdvancedSearch/AdvancedSearch";
import "./main.scss";
import Nav from "../../components/component/Navbar/Nav";
import Footer from "../../components/component/Futter/Futter";
import Title from "../../components/component/titleBig/Title";
import Button from "../../components/component/buttnBg/Button";
import Buttonout from "../../components/component/buttonoutline/Buttonout";
import { Container as Cont } from "@mui/material";
import { Container } from "react-bootstrap";
import Timeline from "../../components/component/Timeline/Timeline";
import { Link } from "react-router-dom";

// import images
import phone from "../../assets/Nurlan/img/MainPage/GuyAndPhone.jpg";
import MenWithPhone from "../../assets/Nurlan/img/MainPage/MenWithPhone.png";
import GirlWithEarth from "../../assets/Nurlan/img/MainPage/GirlWithEarth.png";
import Buxoro from "../../assets/Nurlan/img/MainPage/Buxoro.jpg";
import Samarqand from "../../assets/Nurlan/img/MainPage/Samarqand.jpg";
import Xiva from "../../assets/Nurlan/img/MainPage/Xiva.jpg";
import BootstrapCarouselComponent from "../../components/component/carousel/BootstrapCarouselComponent";
import arrow from "../../assets/Nurlan/img/MainPage/right.svg";
import "bootstrap/dist/css/bootstrap.min.css";



 

function MainPage(props) {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="topblock">
        <div className="FirstMainBlock">
          <div className="BigSearch">
            <AdvancedSearch />
          </div>

          <div className="LeftFirstMainBlock">
            <div className="leftText">
              <p class="leftBigText">
                Dunyo bo'ylab ishonchli gidlar va
                <br />
                tarjimonlarni taklif qilamiz
              </p>
            </div>
            <div className="ImgLeftMainBlock">
              <img src={phone} />
            </div>
          </div>
        </div>
        <div className="ourOffer">
          <Title text="Biz nima taklif qilamiz" />
        </div>

        <div className="middleBlock">
          <div className="forEmployer">
            <h4>Tadbirkorlar uchun</h4>
            <p className="forEmployerText">
              Ushbu platforma yordamida siz chet elliklar bilan
              <br />
              kelishish, biznesni rivojlantirish uchun tarjimon va gitlarni
              topishingiz mumkin.
              <br />
              O’zingiz uchun Git tanlang yoki shunchaki ariza qoldiring.
            </p>
            <div className="buttons__gr">
              <Link to="/authorization">
                <Button button="Ariza qoldirish" />
              </Link>
              <div className="Buttonout">
                <Link to="chooseGits">
                  <Buttonout button2="Gitni tanlash" />
                </Link>
              </div>
            </div>
          </div>
          <div className="imgManWithPhone">
            <img src={MenWithPhone} />
          </div>
        </div>

        <div className="middleBlockLow">
          <div className="imgGirlWithEarth">
            <img src={GirlWithEarth} />
          </div>
          <div className="forGits">
            <h4>Gitlar uchun</h4>
            <p className="middleBlockLowText">
              Ushbu platforma yordamida siz o’zingiz uchun
              <br />
              mijozlarni topishingiz va karyera qilishingiz mumkin.
              <br />
              Gits.uz platformasi sizni qo’llab quvvatlab turadi.
              <br />
              Xoziroq ro’yhattan o’ting, ma’lumotlaringizni to’ldiring va o’z
              karyerangizni boshlang!
            </p>
            <div className="registrationBtn">
              <Link to="/authorization">
                <Button button="Ro‘yhattan o’tish" />
              </Link>
            </div>
          </div>
        </div>
        <div className="howWork">
          <Title text="Bu qanday ishlaydi" />
        </div>
        <div className="TimeLine">
          <Timeline />
        </div>
        <div className="mostCity">
          <Title text="Eng ko’p boriladigan shaharlar" />
        </div>
        <div className="container cards">
          <div className="row">
            <div className="col-12">
              <div className="col-4">
                <img src={Buxoro} />
                <div className="text">
                  <p>Buxoro</p>
                  <Link to="/bukhara">
                    <button>
                      Ko’rish
                      <img src={arrow} alt="strelka" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="col-4">
                <img src={Samarqand} />
                <div className="text">
                  <p>Samarqand</p>
                  <Link to="/bukhara">
                    <button>
                      Ko’rish
                      <img src={arrow} alt="strelka" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-4">
                <img src={Xiva} />
                <div className="text">
                  <p>Xiva</p>
                  <Link to="/bukhara">
                    <button>
                      Ko’rish
                      <img src={arrow} alt="strelka" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mostCity">
          <Title text="Mijozlarlamizning fikirlari" />
        </div>
        <div className="slideComments">
          <BootstrapCarouselComponent />
        </div>
        <div className="mostCity">
          {/* <Title text="Xoziroq o’zingiz uchun Git tanlang " />
          <Title text="yoki shunchaki ariza qoldiring." /> */}
        </div>
        </div>
      </div>

      <div className="footerRegistr">
        <p className="footerRegText">
          Xoziroq ro’yhattan o’ting, ma’lumotlaringizni <br /> to’ldiring va o’z
          karyerangizni boshlang!
        </p>
        <div className="bottomButtons">
          <Link to="/authorization">
            <Button button="Ariza qoldirish" />
          </Link>
          <Link to="/chooseGits">
            <Buttonout button2="Gitni tanlash" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
