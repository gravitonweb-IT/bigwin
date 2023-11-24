
import React from "react";
import "./Home.css";
import "animate.css";
import Logo from "../../assets/Images/logo.svg";
import Img1 from "../../assets/Images/google_play.svg";
import Game1 from "../../assets/Images/game1.png";
import Game2 from "../../assets/Images/game2.png";
import Game3 from "../../assets/Images/game3.png";
import Game4 from "../../assets/Images/game4.png";
import Game5 from "../../assets/Images/game5.png";
import Game6 from "../../assets/Images/game6.png";
import Game7 from "../../assets/Images/game7.png";
import Game8 from "../../assets/Images/game8.png";
import Game9 from "../../assets/Images/game9.png";
import Screen1 from "../../assets/Images/screenshot1.jpg";
import Screen2 from "../../assets/Images/screenshot2.jpeg";
import Screen3 from "../../assets/Images/screenshot3.jpg";
import Screen4 from "../../assets/Images/screenshot4.jpg";
import Screen5 from "../../assets/Images/screenshot5.jpg";
import Screen6 from "../../assets/Images/screenshot6.jpg";
import Gplay1 from "../../assets/Images/google_play_icon.svg";

import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="logo flex justify-center">
            <a href="#">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </a>
          </div>
          <p>
            The BigWin App allows you to earn money by playing easy games. There
            are many games available, and anyone can play, but first, you need
            to understand and learn them because they are skill-based games.
          </p>
          <a
            href="http://13.53.77.122:3003/img/BigWin(1.0.1).apk"
            className="download-btn"
            download="BigWin(1.0.1).apk"
          >
            <img src={Img1} className="img-fluid" alt="Download" />
          </a>
          <div className="games">
            <img src={Game1} className="img-fluid" />
              <img src={Game2} className="img-fluid" />
              <img src={Game3} className="img-fluid" />
              <img src={Game4} className="img-fluid" />
              <img src={Game5} className="img-fluid" />
              <img src={Game6} className="img-fluid" />
              <img src={Game7} className="img-fluid" />
              <img src={Game8} className="img-fluid" />
              <img src={Game9} className="img-fluid" />
        </div>
      </div>

      <section className="service_sec">
        <div className="container">
          <div className="row">
            <div className="col">
                <div
                  className="service_cont"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <img src={Screen1} className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div
                  className="service_cont"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <img src={Screen2} className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div
                  className="service_cont"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <img src={Screen3} className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div
                  className="service_cont"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <img src={Screen4} className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div
                  className="service_cont"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <img src={Screen5} className="img-fluid" />
                </div>
              </div>
              <div className="col">
                <div
                  className="service_cont"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <img src={Screen6} className="img-fluid" />
                </div>
              </div>
          </div>
          <div className="anim_logo">
            <span className="anim">
              <img src={Logo} alt="Animated Logo" />
            </span>
          </div>
        </div>
      </section>

      <section className="download_app">
        <div className="container">
          <span>
            <img src={Gplay1} className="img-fluid" alt="Google Play" />
          </span>
          <h4>Download for Android</h4>
          <a
            href="http://13.53.77.122:3003/img/BigWin(1.0.1).apk"
            className="button"
            download="BigWin(1.0.1).apk"
          >
            Download
          </a>
        </div>
      </section>

      <div className="telegram">
        <a href="https://t.me/bigwinappofficial" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
      </div>
    </>
  );
};

export default Home;



















