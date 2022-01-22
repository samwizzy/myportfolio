const path = require("path");

exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      articles: allContentfulArticle {
        nodes {
          title
          slug
        }
      }
    }
  `);

  data.articles.nodes.forEach((node) => {
    createPage({
      path: `/articles/${node.slug}`,
      component: path.resolve("./src/templates/article-details.js"),
      context: { slug: node.slug, title: node.title },
    });
  });
};
