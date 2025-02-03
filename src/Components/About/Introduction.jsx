import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import Ayush_Anshu from "../../Assets/Requird-image/Prof2.jpeg";

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
                <span className="different"> Dhanbad, Jharkhand</span>. I am a
                Frontend Developer specializing in React.js with experience in
                building responsive, high-performance, and scalable web
                applications. Passionate about crafting seamless user
                experiences, I have worked extensively with Next.js, Redux,
                RESTful APIs, and modern UI frameworks. With a strong foundation
                in state management, performance optimization, and cross-browser
                compatibility, I thrive in collaborative environments, solving
                complex problems efficiently. I am always eager to learn new
                technologies and leverage AI-driven solutions to enhance web
                development.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
