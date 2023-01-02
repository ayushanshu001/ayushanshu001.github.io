import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import Ayush_Anshu from "../../Assets/Requird-image/Ayush_Anshu.jpeg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={Ayush_Anshu} alt="myimage" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Ayush Anshu </span> from{" "}
                <span className="different"> Dhanbad, Jharkhand</span>. I have
                completed my graduation in B.Tech in Mechanical Engineering from
                Techno India College of Technology, Kolkata & completed my Full
                Stack Web Development course as a full time from Masai School in which I learnt
                Coding, Data Structure & Algorithm along with Soft Skills.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
