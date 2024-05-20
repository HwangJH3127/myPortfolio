import React from "react";
import { TypeAnimation } from "react-type-animation";
import main_bg from "../../assets/img/main_bg.png";
import "./Home.style.css";

const Home = () => {
  return (
    <section id="Home">
      <div className="section__inner">
        <div className="home__layout">
          <TypeAnimation
            sequence={[
              `안녕하세요! \n언제나 열정적인 웹 퍼블리셔,\n황종현입니다.`,
            ]}
          />

          <div className="main_bg">
            <img src={main_bg} alt="메인 이미지" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
