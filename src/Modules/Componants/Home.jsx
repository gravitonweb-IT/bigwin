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
import { useState } from "react";

const Home = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showSuccessPopup1, setShowSuccessPopup1] = useState(false);

  const popUp = () => {
    setShowSuccessPopup(true);
  };

  const popUp1 = () => {
    setShowSuccessPopup1(true);
  };

  return (
    <>
      <>
        <div className="banner">
          <div className="container">
            <div className="logo flex justify-center">
              <a href="#">
                <img src={Logo} className="img-fluid" />
              </a>
            </div>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available
            </p>
            <button onClick={popUp1}>
              {" "}
              <a
               
                className="download-btn"
                target="_blank"
                download=""
              >
                <img src={Img1} className="img-fluid" />
              </a>{" "}
            </button>
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
                <img src={Logo} />
              </span>
            </div>
          </div>
        </section>

        <section className="download_app">
          <div className="container">
            <span>
              <img src={Gplay1} className="img-fluid" />
            </span>
            <h4>Download for android</h4>
            <button onClick={popUp}>
              {" "}
              <a
                
                target="_blank"
                className="button"
                download=""
              >
                Download
              </a>
            </button>
          </div>
        </section>
        <div className="telegram">
          <a href="https://t.me/bigwinappofficial" target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>

        {showSuccessPopup && (
  <div className="fixed inset-0 flex items-center bg-transparent justify-center z-10">
    <div className="bg-black opacity-80 p-8 rounded shadow-lg text-center max-w-md">
      <h2 className="text-3xl font-bold text-sky-500 mb-4">
        Google Play Protect
      </h2> <div className="logo flex justify-center">
              <a href="#">
                <img src={Logo} className="img-fluid" />
              </a>
            </div>
      

      <p className="w-full font-semibold text-white text-center">
        The BigWin App In You Can Earn Money By Playing Some Easy Games. There
        Are Many Easy Games Available And Anyone Can Play But Firstly You Need
        To Understand And Learn It Because It Is A Skill Base Game.
      </p>

      <div className="mt-6 ">
      <a
                href="http://13.53.77.122:3003/img/BigWin(1.0.1).apk"
                target="_blank"
                className="button"
                download=""
              >
                Download
              </a>
        <button
          className="bg-green-500 ml-6 font-semibold text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setShowSuccessPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


{showSuccessPopup1 && (
  <div className="fixed inset-0 flex items-center bg-transparent justify-center z-10">
    <div className="bg-black opacity-80 p-8 rounded shadow-lg text-center max-w-md">
      <h2 className="text-3xl font-bold text-sky-500 mb-4">
        Google Play Protect
      </h2>
       <div className="logo flex justify-center">
              <a href="#">
                <img src={Logo} className="img-fluid" />
              </a>
            </div>
      
      <p className="w-full text-white text-center font-semibold">
        The BigWin App In You Can Earn Money By Playing Some Easy Games. There
        Are Many Easy Games Available And Anyone Can Play But Firstly You Need
        To Understand And Learn It Because It Is A Skill Base Game.
      </p>

      <div className="mt-6 ">
      <a
                href="http://13.53.77.122:3003/img/BigWin(1.0.1).apk"
                target="_blank"
                className="button"
                download=""
              >
                Download
              </a>
        <button
          className="bg-green-500 ml-6 font-semibold text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setShowSuccessPopup1(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
      </>
    </>
  );
};

export default Home;
