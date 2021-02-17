<h1 height="80" align="center" > Trend Magazine Website </h1>

<p align="center">
  TREND is a student-run fashion and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer. This repo is an <em>opinionated</em> Gatsby v2 starter with React Context by Fabian Schultz, styled-components, page transitions, scroll events with <code>IntersectionObserver</code> and a focus on accessibility and SEO. I will be using it mainly for the transitions between pages and navigation!
</p>

## Goal + Logistics 
Develop a website that can be used in future years of Trend! With this in mind, it would be good to adopt a general aesthetic that could work with many different colors that could adapt to the many different issues that are to come! For more on logistics, please refer to this document: https://docs.google.com/document/d/1zmwdaTZtiMS2JkQL7tzt0ZsKij0461KSesjPOI-_Q5w/edit?usp=sharing 



## Configuration

Find the site-wide configuration in `site-config.js`.

```js
module.exports = {
  siteTitle: `Gatsby Universal`,
  siteTitleShort: `GatsbyU`,
  siteDescription: `An opinionated starter for Gatsby.`,
  siteUrl: `https://gu.fabianschultz.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
```

> 🚨 Don't forget to update your `robots.txt` inside `static/`!

## Folder structure
```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   │   ├── head # All meta tags etc.
│   │   ├── io # Intersection Observer component, uses render props
│   │   ├── layout # Layout component
│   │   │   ├── layout.css.js # .css.js for component's `styled-components`
│   │   │   └── layout.js
│   │   └── transition # Page Transition component, used by Gatsby APIs
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── containers # Container components if store is needed
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── mediaTemplates.js # Creates media queries for styled-components
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
│   └── global.css.js # Global CSS
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```

### Author of the starter
* Fabian Schultz ([@fschultz_](https://twitter.com/fschultz_)) - [Stink Studios](https://stinkstudios.com)
