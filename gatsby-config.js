module.exports = {
  siteMetadata: {
    title: `Parth Dhyani`,
    description:
      "My name is Parth Dhyani and I am currently working as a software engineer at HubSpot. I previously led The Michigan Daily's software development team.",
    siteUrl: `https://pdhyani.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-41EFRV3TS6", // Google Analytics / GA
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-transformer-sharp",
  ],
};
