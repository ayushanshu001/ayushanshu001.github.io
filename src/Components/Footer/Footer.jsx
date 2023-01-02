import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className={"section " + themename}>
        <a
          href="https://github.com/ayushanshu001"
          rel="noreferrer"
          target="_blank"
        >
          <p className="a">Copyright © 2022. All rights reserved</p>
          <h3 className="footer">Made with ❤ by Ayush Anshu</h3>
        </a>
      </div>
    </>
  );
};
