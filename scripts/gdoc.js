// https://github.com/newsdev/archieml-js

const { google } = require("googleapis");
const archieml = require("archieml");
const fs = require("fs");
const url = require("url");
const htmlparser = require("htmlparser2");
const entities = require("html-entities");

const fileId = "1IDfwLjMdAeFRwybEcOsONaqeqTLFNnaPiUzpNQqAhis";
const archieOutput = "./src/data/data.json";
const keyFile = "auth.json";

const auth = new google.auth.GoogleAuth({
  keyFile,
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({ version: "v3", auth });

const parse = (data) =>
  new Promise((res, rej) => {
    const handler = new htmlparser.DomHandler((error, dom) => {
      if (error) {
        rej(error);
        return;
      }
      const tagHandlers = {
        _base(tag) {
          let str = "";
          tag.children.forEach((child) => {
            if ((func = tagHandlers[child.name || child.type]))
              str += func(child);
          });
          return str;
        },
        text(textTag) {
          return textTag.data;
        },
        span(spanTag) {
          const { style } = spanTag.attribs;
          let str = tagHandlers._base(spanTag);
          if (style && style.includes("font-weight:700")) {
            str = `<b>${str}</b>`;
          }
          if (style && style.includes("font-style:italic")) {
            str = `<em>${str}</em>`;
          }
          return str;
        },
        p(pTag) {
          return `${tagHandlers._base(pTag)}\n`;
        },
        a(aTag) {
          let { href } = aTag.attribs;
          if (href === undefined) return "";

          // extract real URLs from Google's tracking
          // from: http://www.google.com/url?q=http%3A%2F%2Fwww.nytimes.com...
          // to: http://www.nytimes.com...
          if (
            aTag.attribs.href &&
            url.parse(aTag.attribs.href, true).query &&
            url.parse(aTag.attribs.href, true).query.q
          ) {
            href = url.parse(aTag.attribs.href, true).query.q;
          }

          let str = `<a href="${href}" target="_blank" rel="noreferrer">`;
          str += tagHandlers._base(aTag);
          str += "</a>";
          return str;
        },
        li(tag) {
          return `* ${tagHandlers._base(tag)}\n`;
        },
      };

      ["ul", "ol"].forEach((tag) => {
        tagHandlers[tag] = tagHandlers.span;
      });
      ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((tag) => {
        tagHandlers[tag] = tagHandlers.p;
      });

      const body = dom[0].children[1];
      let parsedText = tagHandlers._base(body);

      // Convert html entities into the characters as they exist in the google doc
      parsedText = entities.decode(parsedText);

      // Remove smart quotes from inside tags
      parsedText = parsedText.replace(/<[^<>]*>/g, (match) =>
        match.replace(/”|“/g, '"').replace(/‘|’/g, "'")
      );

      // Remove  U+00a0
      parsedText = parsedText.replace(/\u00A0/g, " ");

      const parsed = archieml.load(parsedText);
      res(parsed);
    });
    const parser = new htmlparser.Parser(handler);
    parser.write(data);
    parser.end();
  });
drive.files
  .export({ fileId, mimeType: "text/html" })
  .then((res) => parse(res.data))
  .then((res) => fs.writeFileSync(archieOutput, JSON.stringify(res)))
  .catch(console.error);
