/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require("path");

module.exports = {
  title: "Get answers to everything Paymennt",
  tagline: "Build amazing payment experiences with Paymennt’s unified platform",
  url: "https://docs.paymennt.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  projectName: "docs",
  organizationName: "paymennt",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      logo: {
        alt: "paymennt logo",
        src: "img/paymennt-logo.svg",
      },
      items: [
        {
          to: "guides/",
          activeBasePath: "guides",
          label: "USER GUIDE",
          position: "left",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "DEVELOPER GUIDE",
          position: "left",
        },
        {
          to: "api/",
          activeBasePath: "api",
          label: "API SPECS",
          position: "left",
        },
      ],
    },
    footer: {
      links: [
        {
          html: `
              <div>
                  <a href="https://www.paymennt.com" target="_blank">
                    <img src="/img/paymennt-logo-white.svg" alt="paymennt logo" width="114" height="51" />
                  </a>
              </div>
          `,
        },
        {
          label: 'Security',
          href: 'https://www.google.com/',
        },
        {
          label: 'Privacy',
          href: 'https://www.google.com/',
        },
        {
          label: 'API Specs',
          href: 'https://www.google.com/',
        },
        {
          html: `
            <div class="footer__socials">
                <a href="https://www.google.com/" target="_blank">
                    <img src="/img/facebook.svg" alt="paymennt facebook" width="40"/>
                </a>
                <a href="https://www.google.com/" target="_blank">
                    <img  src="/img/instagram.svg" alt="paymennt instagram" width="40"/>
                </a>
                <a href="https://www.google.com/" target="_blank">
                    <img  src="/img/linkedin.svg" alt="paymennt linkedin" width="40" />
                </a>
            </div>
          `,
        },
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ["swift"],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',

      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',

      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.docs.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "api/paymennt.yaml",
            route: "/api",
          },
        ],
        theme: {
          primaryColor: "#25405d",
          redocOptions: {
            disableSearch: true,
            hideDownloadButton: true,
          },
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "community",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars.guides.js"),
      },
    ],
    path.resolve(__dirname, "plugins/webpack"),
  ],
};
