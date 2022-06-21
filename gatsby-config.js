module.exports = {
  siteMetadata: {
    title: `Parth Dhyani`,
    description:
      "My name is Parth Dhyani and I am currently working as a software engineer at HubSpot. I previously led The Michigan Daily's software development team.",
    siteUrl: `https://pdhyani.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80,
      },
    },
  ],
};
