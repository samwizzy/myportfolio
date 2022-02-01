import { graphql, Link, withPrefix } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { classNames } from "../utils/helpers";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import WorkTimeline from "../components/partials/WorkTimeline";
import { HiOutlineDocumentText } from "react-icons/hi";

const IndexPage = ({ data }) => {
  const { profile } = data;
  console.log(data, "data");

  return (
    <Layout>
      <title>Home Page</title>

      <div className="w-full h-96 bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-8">
            <div className="sm:col-span-6 col-span-12 sm:pt-32 pt-12">
              <h1 className="text-xl font-mono text-purple-200 ml-1">I am</h1>
              <h1 className="text-7xl font-thin text-purple-200">
                Samuel <span className="font-black">Okeke</span>
              </h1>
              <h1 className="text-xl font-light text-purple-200 mb-8">
                — Software Developer
              </h1>
              <h3 className="text-sm font-bold text-purple-100">My quote</h3>
              <p className="text-sm text-gray-200 italic font-mono mb-4">
                Works easy to work smart, apply logic and reapply precedence.
              </p>
              <h3 className="text-sm font-bold text-purple-100">His quote</h3>
              <p className="text-sm text-gray-200 italic font-mono mb-8">
                Creativity is intelligence having fun. — Albert Einstein
              </p>

              <Stack direction="row" spacing="16px" marginY="16px">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="rounded-xl"
                  component={Link}
                  to="/tools"
                >
                  Tools
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  className="rounded-xl"
                  component={Link}
                  to="/portfolio"
                >
                  Portfolio
                </Button>
              </Stack>
            </div>
            <div className="sm:col-span-6 col-span-12 sm:pt-16 sm:block hidden">
              <img src="anime.svg" alt="anime" />
            </div>
          </div>
        </div>
      </div>
      <div className="spacer layer"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ul>
          <li className="sm:mb-16 mb-8">
            <h2 className="text-purple-600 text-6xl font-black">Biography</h2>
          </li>
          {profile.nodes.map((link) => (
            <li key={link.id} className="py-4">
              <div>
                <h3
                  className={classNames(
                    "text-gray-600 text-2xl font-bold uppercase mb-3",
                    link.isUnderlined && "partial-line"
                  )}
                >
                  {link.title}
                </h3>

                <p className="text-gray-400 text-sm font-medium space-x-2">
                  {link.reference &&
                    link.reference.map((ref) => (
                      <span
                        key={ref}
                        className=" bg-green-700 text-white p-1.5 rounded-md text-xs font-bold"
                      >
                        {ref}
                      </span>
                    ))}
                </p>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: link.body?.childMarkdownRemark?.html,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-white shadow-sm my-4 mb-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-12 sm:gap-10 gap-x-0 gap-y-8">
            <div className="sm:col-span-6 col-span-12 flex items-center px-4 sm:px-6 lg:px-8 sm:py-8 py-4 bg-slate-600 bg-timeline relative">
              <div className="w-full justify-between bg-black sm:p-16 p-8 bg-transition">
                <h2 className="flex items-center space-x-1 text-6xl font-black text-purple-200 mb-4">
                  <span>Job History</span>
                  <HiOutlineDocumentText />
                </h2>
                <p className="text-base text-gray-200 italic mb-4">
                  Its been quite a journey for me, <br />I can now see where
                  this road leads.
                  <br />I want you to know how far I have come.
                </p>

                <div className="sm:space-x-3 space-x-1 space-y-2">
                  <a
                    href={withPrefix("./resume.pdf")}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600 rounded-md px-4 py-2"
                  >
                    View CV
                  </a>
                  <a
                    href={withPrefix("./resume.pdf")}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600 rounded-md px-4 py-2"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6 col-span-12 px-4 sm:px-6 lg:px-8 py-16">
              <WorkTimeline />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div>
          <span className="text-sm font-mono">Proudly Designed with</span>
          <img
            className="ml-2 inline-block"
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
          <img
            className="ml-2 inline-block h-6"
            alt="Material UI"
            src="https://img.icons8.com/color/50/000000/material-ui.png"
          />
          <img
            className="ml-2 inline-block h-6"
            alt="GraphQL"
            src="https://img.icons8.com/color/48/000000/graphql.png"
          />
          <img
            className="ml-2 inline-block h-6"
            alt="Tailwind CSS"
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          />
          <img
            className="ml-2 inline-block h-6"
            alt="Contentful"
            src="/contentful.svg"
          />
        </div>

        <p className="text-sm font-mono mt-4">
          Follow me @{" "}
          <code className="text-sm rounded-md p-2 bg-purple-100 text-purple-600">
            @sampedia
          </code>{" "}
          to know more about me.
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SiteData {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    profile: allContentfulProfile(sort: { fields: createdAt }) {
      nodes {
        id
        isUnderlined
        title
        body {
          childMarkdownRemark {
            html
            excerpt(format: HTML)
          }
        }
        reference
      }
    }
  }
`;

export default IndexPage;
