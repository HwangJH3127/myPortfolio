import React from "react";
import { SnsMenu } from "../../../constants/footer";

import "./Footer.style.css";

const Footer = () => {
  return (
    <footer
      id="footer"
      // className={scrollPosition <= 0 ? "" : "active"}
      role="contentinfo"
    >
      <div className="section__inner">
        <ul>
          {SnsMenu.map((sns, key) => (
            <li key={key}>
              <a
                href={sns.url}
                rel="noopener noreferrer"
                aria-label={sns.title}
                target="_blank"
              >
                <span>{sns.icon}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:whdgusdldl22@naver.com" rel="noopener noreferrer">
          whdgusdldl22@naver.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
