import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import * as style from "../styles/components/SocialIcons.module.css";

const SocialIcons = ({ vertical }) => (
  <div className={vertical ? style.vertical : style.container}>
    <a
      className={style.link}
      href="mailto:parthdhyani20@gmail.com"
      aria-label="Email"
      title="Email"
    >
      <FontAwesomeIcon className={style.icon} icon={faEnvelope} size="s" />
    </a>
    <a
      className={style.link}
      href="https://www.linkedin.com/in/parth-dhyani/"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} size="s" />
    </a>
    <a
      className={style.link}
      href="https://twitter.com/parthd4"
      aria-label="Twitter"
      title="Twitter"
    >
      <FontAwesomeIcon className={style.icon} icon={faTwitter} size="s" />
    </a>
  </div>
);

SocialIcons.propTypes = {
  vertical: PropTypes.bool,
};

SocialIcons.defaultProps = {
  vertical: false,
};

export default SocialIcons;
