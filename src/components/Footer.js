import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "./SocialIcons";

import * as style from "../styles/components/Footer.module.css";
import data from "../data/data.json";

const Footer = () => (
  <div className={style.footer}>
    <div className={style.container}>
      <p className={style.name}>Parth Dhyani</p>
      <div className={style.iconContainer}>
        <SocialIcons />
      </div>
      <button
        type="button"
        role="link"
        className={style.button}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1nN_v9yXYZxp9DAs9cES42YrXVYqtaqEX/view?usp=sharing"
          )
        }
      >
        Resume <FontAwesomeIcon icon={faFileArrowDown} className={style.icon} />
      </button>
      <div
        className={style.longText}
        dangerouslySetInnerHTML={{
          __html: data.footer.elements.map((e) => e.text).join(" | "),
        }}
      />
      <div className={style.shortText}>
        {data.footer.elements.map((e) => (
          <p
            dangerouslySetInnerHTML={{
              __html: e.text,
            }}
            key={e.text}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
