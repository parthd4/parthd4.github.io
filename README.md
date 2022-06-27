<p align="center">
  <a href="https://pdhyani.com">
    <img alt="P" src="https://pdhyani.com/icons/icon-144x144.png" width="60" />
  </a>
</p>
<h1 align="center">
  My Personal Website
</h1>

This site is created with [React](https://reactjs.org/) and [Gatsby](https://www.gatsbyjs.com/).

The content of the site is written in [this private google doc](https://docs.google.com/document/d/1IDfwLjMdAeFRwybEcOsONaqeqTLFNnaPiUzpNQqAhis/edit) in [ArchieML](http://archieml.org/).

In order to fetch data from the google doc, add this [private `auth.json`](https://drive.google.com/drive/u/0/folders/13ubyYOqmaZgymbBZgDtXdalLBltHsFtk) to the root of the project.

## Developing
- `npm install` to install packages
- `npm run fetch` to fetch the latest content from the google doc and parse the ArchieML into HTML
- `npm run start` to run the site locally at http://localhost:8000

## Deploying
To deploy, run `npm run deploy` which will fetch the latest content from the google doc, build the site for production, and deploy the site by pushing to [`gh-pages`](https://github.com/parthd4/parthd4.github.io/tree/gh-pages).

Ensure that a CNAME is present.

After the site builds on [GitHub pages](https://github.com/parthd4/parthd4.github.io/deployments/activity_log?environment=github-pages), you should be able to access the site at https://pdhyani.com