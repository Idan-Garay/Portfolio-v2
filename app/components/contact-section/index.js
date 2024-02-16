import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { roboto } from "@/app/fonts";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const ContactSection = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const animationStyle = {
    transition: "all 0.8s",
    opacity: isInView ? 1 : 0,
    transform: isInView ? "none" : "translateX(150px)",
  };
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionContent} ref={ref}>
        <h1
          style={{ ...roboto.style, ...animationStyle }}
          className={styles.h1}
        >
          Let&apos;s Connect
        </h1>
        <p style={animationStyle}>
          Feel free to reach out if you’re looking for a developer, have a
          question, or just want to connect.
        </p>
        <div className={styles.label}>
          <div style={animationStyle} className={styles.labelLine}></div>
          <b
            style={{ ...animationStyle, transitionDelay: "0.8s" }}
            className={styles.p}
          >
            garayidan@gmail.com
          </b>
        </div>
      </div>
      <footer className={styles.footer}>
        <div
          style={{
            minWidth: "6.5rem",
            height: "2.5rem",
            objectFit: "contain",
            position: "relative",
          }}
        >
          <Link  href="#heroSection">
            <Image
              src="/white-logo.svg"
              alt="logo"
              fill
              sizes="(max-width: 768px) 100px, 130px"
            />
          </Link>
        </div>
        <ul>
          <Link style={{ ...animationStyle, transitionDelay: "0.5s" }}
            target="_blank"
            className={styles.link}
            href="https://www.linkedin.com/in/idan-joshua-garay"
          >
            Linkedin
          </Link>
          <Link style={{ ...animationStyle, transitionDelay: "0.6s" }}
            target="_blank"
            className={styles.link}
            href="https://github.com/Idan-Garay"
          >
            GitHub
          </Link>
          <Link style={{ ...animationStyle, transitionDelay: "0.7s" }}
            target="_blank"
            className={styles.link}
            href="https://twitter.com/GarayIdan"
          >
            Twitter
          </Link>
        </ul>
      </footer>
    </section>
  );
};
