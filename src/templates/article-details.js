import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

function ArticleDetails({ data }) {
  const { title, body } = data.article;

  return (
    <Layout>
      <title>Article Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-400 mb-8">
          Article Details
        </h1>

        <div className="grid grid-cols-12 sm:gap-x-8 gap-x-0 gap-y-8">
          <div className="col-span-12">
            <h2 className="text-xl font-bold mb-8">{title}</h2>
            <div
              className="font-light"
              dangerouslySetInnerHTML={{
                __html: body?.childMarkdownRemark?.html,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query MyQuery($slug: String) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default ArticleDetails;
