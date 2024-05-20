import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import React from "react";
import "./Skills.style.css";

const Skills = () => {
  return (
    <div id="Skills">
      <div>
        <h3>편해요!</h3>
        <ul>
          <li>
            <FaHtml5 style={{ color: "rgb(227,79,38)" }} /> <span>HTML5</span>
          </li>
          <li>
            <FaCss3Alt style={{ color: "rgb(21,114,182)" }} /> <span>CSS3</span>
          </li>
          <li>
            <FaSass style={{ color: "rgb(204,102,153)" }} /> <span>SASS</span>
          </li>
        </ul>
        <ul>
          <li>
            <IoLogoJavascript style={{ color: "rgb(247,223,30)" }} />
            <span>JavaScript(ES6+)</span>
          </li>
          <li>
            <DiJqueryLogo style={{ color: "rgb(7,105,173)" }} />
            <span>jQuery</span>
          </li>
          <li>
            <FaBootstrap style={{ color: "rgb(121,82,179)" }} />
            <span>BootStrap</span>
          </li>
        </ul>
      </div>

      <div className="mt-3">
        <h3>쓸줄알아요!</h3>
        <ul>
          <li>
            <FaReact style={{ color: "rgb(97,218,251)" }} /> <span>REACT</span>
          </li>
          <li>
            <FaGitAlt style={{ color: "rgb(232,77,49)" }} /> <span>git</span>
          </li>
          <li>
            <FaGithub style={{ color: "rgb(255,255,255)" }} />
            <span>gitHub</span>
          </li>
          <li>
            <FaFigma style={{ color: "rgb(127,82,255)" }} /> <span>figma</span>
          </li>
        </ul>
      </div>

      <div className="mt-3">
        <h3>그 외..</h3>
        <ul>
          <li>
            <span>안양대학교 멀티미디어학과 졸업</span>
          </li>
          <li>
            <span>스마트웹디자인 UI/UX 실무자양성과정 수료</span>
          </li>
          <li>
            <span>정보처리기사 자격증</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
