import React, { useEffect, useState } from "react";
import "./MoveTop.style.css";

const MoveTop = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 187.5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={`topBtn ${scroll ? "active" : ""}`}>
      <button onClick={MoveToTop}>
        <img
          src="https://img.cgv.co.kr/R2014/images/common/btn/gotoTop.png"
          alt="탑으로 이동"
        />
      </button>
    </div>
  );
};

export default MoveTop;
