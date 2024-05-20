import React from "react";

import { motion } from "framer-motion";
import "./About.style.css";
import Skills from "../Skills/Skills";
const About = () => {
  return (
    <section id="About">
      <h2>ABOUT</h2>

      <div className="about__inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <div className="introduce">
            <h3>책임감 있는 사람입니다.</h3>
            <p>
              저는 항상 새로운 도전에 대한 열정과 긍정적인 자세를 가지고
              있습니다.
              <br />
              어려움을 마주할 때도 포기하지 않고 문제에 집중하여 해결책을
              찾아내는 능력을 갖추려고 노력하고 있습니다.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
          style={{ width: "100%" }}
        >
          <Skills />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
