import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export const Qualification = () => {
  return (
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
          <div className="qualification-button button-flex" data-target="#work">
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
  );
};
