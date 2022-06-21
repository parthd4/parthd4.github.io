import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as style from "../styles/components/Intro.module.css";
import data from "../data/data.json";

const Intro = () => (
  <div className={style.container}>
    <StaticImage
      src="../images/headshot.webp"
      alt="A headshot of Parth Dhyani"
      placeholder="blurred"
      width={300}
      height={300}
      className={style.headshot}
    />
    <div className={style.introText}>
      <h2 className={style.title}>{data.intro.title}</h2>
      {data.intro.body.split("\n").map((p, i) => (
        <p dangerouslySetInnerHTML={{ __html: p }} key={i} />
      ))}
    </div>
  </div>
);

export default Intro;
