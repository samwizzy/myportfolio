import { graphql, Link } from "gatsby";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Layout from "../components/Layout";
import { HiOutlineClock, HiOutlineArrowLeft } from "react-icons/hi";

function ArticleDetails({ data }) {
  const { title, body } = data.article;

  return (
    <Layout>
      <title>Article details</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid grid-cols-12 sm:gap-x-8 gap-x-0 gap-y-8">
          <div className="sm:col-span-8 col-span-12">
            <div className="flex items-start mb-6">
              <div className="flex items-center justify-center w-fit border border-purple-800 rounded-full p-2">
                <Link to="/articles">
                  <HiOutlineArrowLeft size="32" color="#7e22ce" />
                </Link>
              </div>
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {title}
                </h1>
                <Stack direction="row" spacing={2} alignItems="center">
                  <div className="flex items-center text-sm text-gray-800">
                    <Avatar
                      sx={{ width: 24, height: 24, mr: 0.5 }}
                      alt="Samuel Okeke"
                      src="https://ik.imagekit.io/3ugevgshj2i/samjpg_M6cSaT7Vjxu.jpg?updatedAt=1641379507144"
                    />
                    <span className="text-sm text-gray-600 capitalize">
                      Samuel Okeke
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <HiOutlineClock />
                    <span className="text-sm">21 Jan, 2022 09:30</span>
                  </div>
                </Stack>
              </div>
            </div>

            <div
              className="overflow-auto leading-7"
              dangerouslySetInnerHTML={{
                __html: body?.childMarkdownRemark?.html,
              }}
            />
          </div>
          <div className="sm:col-span-4 col-span-12">
            <div className="mb-8">
              <h1 className="text-xl font-bold text-gray-800 mb-3">
                Favorite Articles
              </h1>

              <div>
                <p className="text-gray-600">No featured article</p>
              </div>
            </div>

            <div className="">
              <h1 className="text-xl font-bold text-gray-800 mb-3">
                Article tags
              </h1>

              <div className="flex gap-2 items-center flex-wrap">
                <Chip label="react" color="primary" />
                <Chip label="angular" variant="outlined" />
                <Chip label="typescript" color="primary" />
                <Chip label="material-ui" variant="outlined" />
                <Chip label="javascript" color="primary" />
                <Chip label="lodash" variant="outlined" />
                <Chip label="DRY" color="primary" />
                <Chip label="nodejs" variant="outlined" />
                <Chip label="gatsby" color="primary" />
                <Chip label="contentful" variant="outlined" />
              </div>
            </div>
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
