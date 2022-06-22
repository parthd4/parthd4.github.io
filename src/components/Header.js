import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowDown,
  // faBars,
  // faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as style from "../styles/components/Header.module.css";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 0)
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
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1nN_v9yXYZxp9DAs9cES42YrXVYqtaqEX/view?usp=sharing"
              )
            }
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
      {/* <div className={style.mobileIcon}>
        <FontAwesomeIcon
          icon={showMobileMenu ? faXmark : faBars}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div> */}
    </div>
  );
};

export default Header;
