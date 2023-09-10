import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as style from "../styles/components/Header.module.css";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.scrollY > 0)
      );
    }
  }, []);

  return (
    <div className={scrolled ? style.headerSmall : style.header}>
      <h1 className={style.title}>Parth Dhyani</h1>
      <div className={style.desktop}>
        <div className={style.mainMenu}>
          <AnchorLink to="/#top" className={style.anchorLink}>
            About
          </AnchorLink>
          <AnchorLink to="/#skills" className={style.anchorLink}>
            Skills
          </AnchorLink>
          <AnchorLink to="/#experience" className={style.anchorLink}>
            Experience
          </AnchorLink>
          <button
            type="button"
            role="link"
            onClick={() => window.open("/Parth_Dhyani_Resume.pdf")}
          >
            Resume{" "}
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className={style.fileIcon}
            />
          </button>
        </div>
        {scrolled ? (
          <div className={style.socialMenuVertical}>
            <SocialIcons vertical />
          </div>
        ) : (
          <div className={style.socialMenu}>
            <SocialIcons />
          </div>
        )}
      </div>
      <div className={style.mobile}>
        <button
          type="button"
          role="link"
          onClick={() => window.open("/Parth_Dhyani_Resume.pdf")}
        >
          Resume{" "}
          <FontAwesomeIcon icon={faFileArrowDown} className={style.fileIcon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
