import React, { useEffect, useState } from "react";
import { headerMenus } from "../../../constants/header";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Header.style.css";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState("Home");

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleToggle = (title) => {
    setActive(title);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    // scroll값을 추적해서 해당값에 원하는 효과를 넣을 수 있음.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    headerMenus.forEach((menu) => {
      const section = document.getElementById(menu.title);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      headerMenus.forEach((menu) => {
        const section = document.getElementById(menu.title);
        if (section) {
          observer.observe(section);
        }
      });
    };
  }, []);

  return (
    <header id="header" className={scrollPosition > 0 ? "active" : ""}>
      <h1>
        <AnchorLink href="#home">H's Web.</AnchorLink>
      </h1>

      <nav>
        <ul>
          {headerMenus.map((menu) => (
            <li
              key={menu.id}
              onClick={() => handleToggle(menu.title)}
              className={active === menu.title ? "active" : ""}
            >
              <AnchorLink href={`#${menu.title}`}>{menu.title}</AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
