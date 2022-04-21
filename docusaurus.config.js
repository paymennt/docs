/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require("path");

module.exports = {
  title: "paymennt documentation",
  tagline: "build amazing payment experiences with the paymennt platform",
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
          label: "GUIDES",
          position: "left",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "DEVELOPER",
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
      style: "light",
      links: [
        {
          items: [
            {
              html: `
                <a href="https://www.paymennt.com" target="_blank">
                  <img src="/img/paymennt-logo.svg" alt="paymennt logo" width="114" height="51" />
                </a>
                <p style="font-size: smaller;">Copyright © ${new Date().getFullYear()} PointCheckout, Ltd</p>
              `,
            },
          ],
        },
        {},
        {
          title: "GUIDES",
          items: [
            {
              label: "account opening",
              to: "/guides/account/requirements",
            },
            {
              label: "desktop access",
              to: "/guides/account/desktop",
            },
          ],
        },
        {
          title: "ACCOUNT MANAGEMENT",
          items: [
            {
              label: "payout bank account",
              to: "/guides/management/payouts/payout-account",
            },
          ],
        },
        {
          title: "ECOMMERCE PLUGINS",
          items: [
            {
              label: "opencart",
              href: "/docs/payment/ecomm/opencart",
            },
            {
              label: "woocommerce",
              href: "/docs/payment/ecomm/woocommerce",
            },
            {
              label: "shopify",
              href: "/docs/payment/ecomm/shopify",
            },
          ],
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          breadcrumbs: false,
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
            spec: "api/paymennt.yml",
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
