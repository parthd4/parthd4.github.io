import React from "react";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; /* eslint-disable import/first */

import "@fontsource/lato";
import "@fontsource/lato/700.css";
import "../styles/index.css";

import Header from "../components/Header";
import Intro from "../components/Intro";
import MoreAboutMe from "../components/MoreAboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";

const IndexPage = () => (
  <>
    <MetaData />
    <Header />
    <div id="top" />
    <div id="pageContent">
      <Intro />
      <MoreAboutMe />
      <Experience />
    </div>
    <Footer />
  </>
);

export default IndexPage;
