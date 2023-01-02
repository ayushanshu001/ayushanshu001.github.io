import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiReact,
  SiJavascript
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import blinkit from "../../Assets/Requird-image/blinkit.png";
import royal from "../../Assets/Requird-image/royal.png";
import saasameal from "../../Assets/Requird-image/saasameal.png";
import naukri from "../../Assets/Requird-image/naukri.png";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        {/* geek buying clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={saasameal} alt="Saasameal.com" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Saasa meal</h2>
              <p>
              Saasa meal is a meat-free lifestyle platform, indulging you with delicious discounted vegetarian meals at cozy environments. This is collaborative project and we are 5 collaborators.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiReact/>
                <SiRedux/>
                <SiNodedotjs/>
                <SiExpress/>
                <SiMongodb/>
              </div>
              <div>
                <a
                  href="  https://premium-grade-140.vercel.app/
                  "
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Sandipmaury/premium-grade-140"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* big basket clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={royal} alt="royal-clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Royal Enfield Clone</h2>
              <p>
              This project is a clone of the Royal Enfield website. During our construct week in Masai School, we as a group of 6 members collaborated and cloned the website within 6 days time.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://royal-enfield-clone.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/ayushanshu001/Royal-Enfield"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* fab bag clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={blinkit} alt="fabbag clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Blinkit Clone</h2>
              <p>
              Blinkit (formerly Grofers) is an Indian instant delivery service. Customers of the company use a mobile application to order groceries and essentials online.Cloning Blinkit was our project for Unit-3 Construct week at Masai School. Our main objective was to complete all main functionality of this e-commerce website , such as sing up to till to the buying of a product. We have completed this project in 5 days.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript/>
              </div>
              <div>
                <a
                  href="https://blink-it-by-arshad-gaurav-ayush-rohit-shubham.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/ayushanshu001/Blinkit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* modesens clone */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={naukri} alt="naukri clone" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Naukri.com Clone</h2>
              <p>
              Naukri.com is a recruitment platform that provide hiring related services to corporates, placement agencies and job seekers in India and overseas.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiReact/>
                <SiRedux/>
              </div>
              <div>
                <a
                  href="https://shiny-hydrant-7464.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/ayushanshu001/shiny-hydrant-7464"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
