import React from "react";

import { motion } from "framer-motion";

import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import blackhole from "../../assets/img/blackhole.webm";

import "./Contact.style.css";

const Contact = () => {
  return (
    <section id="Contact">
      <h2>Contact</h2>

      <div className="section__inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
        >
          <h3>열정적인 웹 퍼블리셔 황종현입니다.</h3>
          <p>언제든 연락주세요~!</p>
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
        >
          <div className="contact__info">
            <p>
              <IoCallOutline />
              <span>010.3127.3870</span>
            </p>
            <p>
              <MdOutlineMail />
              <span>whdgusdldl22@naver.com</span>
            </p>
            <p>
              <BsHouse />
              <span>인천광역시 미추홀구</span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="blackhole">
        <video autoPlay muted loop>
          <source src={blackhole} type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default Contact;
