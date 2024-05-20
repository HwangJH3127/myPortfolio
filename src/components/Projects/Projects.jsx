import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { pojectsText } from "../../constants/projects";

import "./Projexts.style.css";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const horizontalRef = useRef(null); // useRef로 참조할 요소
  const sectionsRef = useRef([]);

  // horizontal 스크롤 애니메이션
  useEffect(() => {
    const horizontal = horizontalRef.current;
    const sections = sectionsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + horizontal.offsetWidth,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="Projects" ref={horizontalRef}>
      <div className="port__inner">
        <h2 className="port__title">Projects</h2>
        <div className="port__wrap">
          {pojectsText.map((project, key) => (
            <article
              className={`port__item p${key + 1}`}
              key={key}
              ref={(el) => (sectionsRef.current[key] = el)}
            >
              <a
                href={project.view}
                target="_blank"
                className="img"
                rel="noopener noreferrer"
              >
                <img src={project.img} alt={project.name} />
              </a>
              <h3 className="title">{project.title}</h3>
              <p className="desc">{project.desc}</p>
              <p className="contribution">기여도 : {project.Contribution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
