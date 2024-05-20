import React from "react";
import { motion } from "framer-motion";
import { contactMenu } from "../../constants/contact";
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
            {contactMenu.map((menu) => (
              <p>
                {menu.icon}
                <span>{menu.context}</span>
              </p>
            ))}
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
