import "./App.css";
import { Header } from "./components/header/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className={isDarkMode ? "app dark-mode" : "main"}>
        <section className="home section" id="home">
          <div className="home-container container grid">
            <div className="home-content grid">
              <div className="home-social">
                <a
                  href="https://www.linkedin.com/in/juan-buitrago-full-stack-developer/"
                  className="home-social-icon"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/jfernand196"
                  className="home-social-icon"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <div className="home-img">
                <svg
                  className="home-blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      className="home-blob-img"
                      x="-15"
                      y="-5"
                      href="portada.jpg"
                    />
                  </g>
                </svg>
              </div>

              <div className="home-data">
                <h1 className="home-title">Hi, I am Juan Fernando Buitrago</h1>
                <p className="home-description">
                  Passionate Full Stack Developer.
                </p>
                <a href="#contact" className="button button-flex">
                  Contact Me{" "}
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="fa-regular fa-envelope button-icon"
                  />
                </a>
              </div>
            </div>
            <div className="home-scroll">
              <a href="#about" className="home-scroll-button button-flex">
                <i className="fa-solid fa-computer-mouse home-scroll-mouse"></i>
                <img className="home-scroll-mouse" src="mouse.svg" alt="" />
                <span className="home-scroll-name">Scroll down</span>
                <i className="fa-solid fa-angles-down home-scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title">About Me</h2>
          <span className="section-subtitle">My Introduction</span>

          <div className="about-container container grid">
            <img src="/aboutimg.png" alt="" className="about-img" />

            <div className="about-data">
              <p className="about-description">
                Full stack web developer with more than 2 years of experience
                developing in react, express, node, mongoDB (MERN stack). Always
                eager and willing to learn new technologies to achieve personal
                goals and professional challenges.
              </p>

              <div className="about-info">
                <div>
                  <span className="about-info-title">02+</span>
                  <span className="about-info-name">
                    Years <br />
                    experience
                  </span>
                </div>
                <div>
                  <span className="about-info-title">02+</span>
                  <span className="about-info-name">
                    Companies <br />
                    worked
                  </span>
                </div>
              </div>

              <div className="about-buttons">
                <a
                  download=""
                  href="/Resume.pdf"
                  className="button button-flex"
                >
                  Download Resume
                  <i className="fa-solid fa-file-arrow-down button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <span className="section-subtitle">My Technical Skills</span>
          <div className="skills-content container">
            <div className="skills-name">JavaScript</div>
            <div className="skills-name">React JS</div>
            <div className="skills-name">Bootstrap</div>
            <div className="skills-name">CSS</div>
            <div className="skills-name">SASS</div>
            <div className="skills-name">Figma</div>
            <div className="skills-name">Node JS</div>
            <div className="skills-name">Express JS</div>
            <div className="skills-name">MongoDB</div>
            <div className="skills-name">Python</div>
            <div className="skills-name">Meteorjs</div>
            <div className="skills-name">Git</div>
            <div className="skills-name">MaterialUi</div>
          </div>
        </section>
        <section className="qualification section">
          <h2 className="section-title">Qualification</h2>
          <span className="section-subtitle">My journey</span>

          <div className="qualification-container container">
            <div className="qualification-tabs">
              <div
                className="qualification-button button-flex qualification-active"
                data-target="#education"
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="fa-solid fa-graduation-cap qualification-icon"
                />
                Education
              </div>
              <div
                className="qualification-button button-flex"
                data-target="#work"
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="fa-solid fa-briefcase qualification-icon"
                />
                Work
              </div>
            </div>

            <div className="qualification-section">
              <div
                className="qualification-content qualification-active"
                data-content
                id="education"
              >
                <div className="qualification-data">
                  <div></div>

                  <div>
                    <span className="qualification-round"></span>
                    <span className="qualification-line"></span>
                  </div>

                  <div>
                    <h3 className="qualification-title">
                      Full stack software engineer
                    </h3>
                    <span className="qualification-subtitle">
                      Okorum Technologies
                    </span>
                    <div className="qualification-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      2022 - PRESENT
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Full Stack Web Developer
                    </h3>
                    <span className="qualification-subtitle">MAKE IT REAL</span>
                    <div className="qualification-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      2021 - 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification-round"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-round"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Full Stack Web Developer
                    </h3>
                    <span className="qualification-subtitle">Make It Real</span>
                    <div className="qualification-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      2021 - 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">Data Science</h3>
                    <span className="qualification-subtitle">MAKE IT REAL</span>
                    <div className="qualification-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification-round"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
                <div className="qualification-data">
                  <div></div>
                  <div>
                    <span className="qualification-round"></span>
                    <span className="qualification-line"></span>
                  </div>
                  <div>
                    <h3 className="qualification-title">
                      Technical Service Manager
                    </h3>
                    <span className="qualification-subtitle">Datecsa sa</span>
                    <div className="qualification-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      2007 - 2022
                    </div>
                  </div>
                </div>
                <div className="qualification-data">
                  <div>
                    <h3 className="qualification-title">
                      Instrumentation and control engineer
                    </h3>
                    <span className="qualification-subtitle">
                      POLITECNICO COLOMBIANO JAIME ISAZA CADAVID
                    </span>
                    <div className="qualification-date">
                      <i className="fa-solid fa-calendar-days"></i>
                      2002 - 2007
                    </div>
                  </div>
                  <div>
                    <span className="qualification-round"></span>
                    <span className="qualification-line"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section >
          <h2 className="section-title">Projects</h2>
          <span className="section-subtitle">Most recent work</span>
        </section>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          
          >
            <SwiperSlide>
              
                <img src="project1.svg" alt="" />


                  <h3 >Business Websites</h3>
                  <p >
                    Dynamic business sites that reflect your brand and engage
                    customers effectively.
                  </p>
               
                  <a
                    href="https://github.com/jfernand196"
                className="arrow"
                  >
                    
                    Project Link

                    <FontAwesomeIcon
                    icon={faArrowRight}
                    className="fa-solid fa-arrow-right button-icon"
                  />
                  
                  </a>
                

            </SwiperSlide>
            <SwiperSlide>

                <img src="project2.svg" alt="" />


                  <h3 >Portfolio Websites</h3>
                  <p >
                    Impressive portfolio sites that showcase your talents with a
                    flawless user experience.
                  </p>
                  <a
                    href="https://github.com/jfernand196"
                    
                  >
                    Project Link
                    <i className="fa-solid fa-arrow-right button-icon"></i>
                  </a>


            </SwiperSlide>
            <SwiperSlide>
       
                <img src="project3.svg" alt=""  />

        
                  <h3 >Landing Pages</h3>
                  <p >
                    Compelling landing pages that drive conversions and engage
                    your audience.
                  </p>
                  <a
                    href="https://github.com/jfernand196"
                    
                  >
                    Project Link
                    <i className="fa-solid fa-arrow-right button-icon"></i>
                  </a>

            </SwiperSlide>
          </Swiper>
  


        <section className="contact section" id="contact">
          <h2 className="section-title">Contact me</h2>
          <span className="section-subtitle">Get in touch</span>

          <div className="contact-container container grid">
            <div>
              <div className="contact-info">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fa-regular fa-envelope contact-icon"
                />
                <div>
                  <h3 className="contact-title">Email</h3>
                  <a
                    href="mailto:jfernand196@gmail.com"
                    className="contact-subtitle"
                  >
                    jfernand196@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fa-brands fa-linkedin contact-icon"
                />
                <div>
                  <h3 className="contact-title">Linkedin</h3>
                  <a
                    className="contact-subtitle"
                    href="https://www.linkedin.com/in/juan-buitrago-full-stack-developer/"
                  >
                    @juan-buitrago-full-stack-developer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-bg">
            <div className="footer-container container grid">
              <div>
                <h2 className="footer-title">Juan F. Buitrago</h2>
                <span className="footer-subtitle">Full Stack Developer</span>
              </div>
              <ul className="footer-links">
                <li>
                  <a href="#portfolio" className="footer-link">
                    Portafolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>

              <div className="footer-socials">
                <a
                  href="https://www.linkedin.com/in/juan-buitrago-full-stack-developer/"
                  className="footer-social"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/jfernand196"
                  className="footer-social"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <p className="footer-copy">By Juan Fernando Buitrago</p>
          </div>
        </footer>
      </main>

      <a href="#home" className="scrollup" id="scroll-up">
        <i className="fa-solid fa-arrow-up scroll-up-icon"></i>
      </a>
    </div>
  );
}

export default App;
