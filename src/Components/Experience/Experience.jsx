import React from "react";
import "./Experience.css";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DateRangeIcon from "@material-ui/icons/DateRange";

export const WorkExperience = () => {
  const experiences = [
    {
      company: "Codenox Technology Pvt. Ltd",
      role: "Frontend Web Developer",
      duration: "May 2023 - January 2025",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js and Next.js.",
        "Optimized UI performance with SSR, SSG, and lazy loading.",
        "Collaborated with designers and backend developers for seamless API integration.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
    },
  ];

  return (
    <div className="work-experience center">
      <h2 data-aos="fade-right">
      <span className="about__name">WORK EXPERIENCE</span>
      </h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index} data-aos="fade-up">
          <div className="exp-det">
            <div>
              <h3>
                <BusinessCenterIcon /><span className="about__name"> {exp.company}</span>
              </h3>
              <h4 className="role-phone">{exp.role}</h4>
            </div>
            <div>
              <p className="experience-duration">
                <DateRangeIcon /> {exp.duration}
              </p>
              <ul>
                {exp.responsibilities.map((task, i) => (
                  <li key={i} className="resp-phone">{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
