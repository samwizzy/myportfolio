module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "greatsam",
    author: "@samwize.inc",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "L50iTTVIb9uBhJLZejBONGfkrsCmg4IoeGWpzGTmFNQ",
        spaceId: "byel0fvyzzmf",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-216124407-3",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pdfs",
        path: "./src/pdfs/",
      },
      __key: "pdfs",
    },
    `gatsby-transformer-pdf`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Quicksand`,
                variants: [`300`, `400`, `500`, `600`, `700`, `800`, `900`],
              },
              {
                family: `Roboto`,
                variants: [`300`, `400`, `500`, `600`, `700`, `800`, `900`],
              },
            ],
          },
        },
      },
    },
  ],
};
