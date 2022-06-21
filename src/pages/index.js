import React from "react";
import "@fontsource/lato";
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
