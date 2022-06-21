import React from "react";

import * as style from "../styles/components/MoreAboutMe.module.css";
import data from "../data/data.json";

const MoreAboutMe = () => (
  <div className={style.container}>
    <div className={style.half}>
      <h2 className="sectionTitle">{data.education.title}</h2>
      {data.education.entries.map((s, i) => (
        <div className={style.school} key={i}>
          <p
            dangerouslySetInnerHTML={{ __html: s.name }}
            className={style.schoolName}
          />
          {s.description.split("\n").map((sd, si) => (
            <p dangerouslySetInnerHTML={{ __html: sd }} key={si} />
          ))}
        </div>
      ))}
    </div>
    <div className={style.half}>
      <h2 className="sectionTitle" id="skills">
        {data.skills.title}
      </h2>
      {data.skills.types.map((s, i) => (
        <div key={i}>
          <p className={style.skillLabel}>{s.name}</p>
          <div className={style.skillContainer}>
            {s.skills.split("; ").map((sk, ski) => (
              <span key={ski} className={style.skill}>
                {sk}
              </span>
            ))}
          </div>
        </div>
      ))}
      <p className="italic">{data.skills.misc}</p>
    </div>
  </div>
);

export default MoreAboutMe;
