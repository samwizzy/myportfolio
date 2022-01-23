const path = require("path");
const slugify = require("slugify");

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
      path: `/articles/${slugify(node.title)}`,
      component: path.resolve("./src/templates/article-details.js"),
      context: { slug: slugify(node.slug), title: node.title },
    });
  });
};
