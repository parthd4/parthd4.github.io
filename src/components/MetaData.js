import React from "react";
import { Helmet } from "react-helmet";

const MetaData = () => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
  >
    <meta charSet="utf-8" />
    <title>Parth Dhyani</title>
    <link rel="canonical" href="https://pdhyani.com" />
    <meta
      name="description"
      content="My name is Parth Dhyani and I am currently a software engineer at HubSpot. Previously, I led The Michigan Daily's software development team."
    />
  </Helmet>
);

export default MetaData;
