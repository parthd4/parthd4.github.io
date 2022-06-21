import React from "react";

import * as style from "../styles/components/Experience.module.css";
import data from "../data/data.json";

const Experience = () => (
  <>
    <h2 className="sectionTitle" id="experience">
      {data.experience.title}
    </h2>
    <div className={style.content}>
      <ul className={style.ul}>
        {data.experience.jobs.map((j, i) => (
          <li className={style.bigLI} key={i}>
            <div className={style.companyHeader}>
              <p className="bold">{j.name}</p>
              <p className={style.location}>{j.location}</p>
            </div>
            <ul className={style.ul}>
              {j.roles.length > 1 ? (
                j.roles.map((r, ri) => (
                  <li className={style.smallLI} key={ri}>
                    <div className={style.companyHeader}>
                      <p className="bold">{r.name}</p>
                      <p className={style.smallDate}>{r.date}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: r.description }} />
                  </li>
                ))
              ) : (
                <li className={style.smallSingleLI}>
                  <div className={style.companyHeader}>
                    <p className="bold">{j.roles[0].name}</p>
                    <p className={style.smallDate}>{j.roles[0].date}</p>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: j.roles[0].description,
                    }}
                  />
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default Experience;
