import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { classNames } from "../utils/helpers";
import db from "../@mock/db.json";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <title>About Me Page</title>

      <div className="w-full h-96 bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-8">
            <div className="sm:col-span-6 col-span-12 sm:pt-32 pt-12">
              <h1 className="text-xl font-mono text-purple-200 ml-1">I am</h1>
              <h1 className="text-7xl font-thin text-purple-200">
                Samuel <span className="font-black">Okeke</span>
              </h1>
              <h1 className="text-xl font-thin text-purple-200 mb-2">
                — Software Developer
              </h1>
              <p className="text-sm italic font-mono mb-8">
                Works easy to work smart, apply logic and reapply precedence.
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
        <title>Home Page</title>
        <h1 className="mb-8">
          Congratulations
          <br />
          <span className="text-purple-500 text-sm font-medium">
            — you just made it to my Profile!
          </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p className="text-sm font-mono mb-4">
          Follow me @{" "}
          <code className="text-sm rounded-md p-2 bg-amber-50 text-purple-600">
            @sampedia
          </code>{" "}
          to know more about me.
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        <ul className="mt-8">
          <li className="mb-8">
            <h2 className="text-purple-500 text-3xl font-black">Biography</h2>
          </li>
          {db.profile.map((link) => (
            <li key={link.text} className="pb-8">
              <div>
                <h3
                  className={classNames(
                    "text-purple-500 text-2xl font-bold uppercase mb-3",
                    link.underline && "partial-line"
                  )}
                  style={{ textAlign: link.dir }}
                >
                  {link.text}
                </h3>

                <p className="text-gray-400 leading-8 text-sm font-medium space-x-4">
                  {link.lists &&
                    link.lists.map((name) => (
                      <span
                        key={name}
                        className=" bg-green-700 text-white p-1.5 rounded-md text-xs font-bold"
                      >
                        {name}
                      </span>
                    ))}
                </p>
                <p
                  className="text-gray-400 leading-8 text-base font-normal"
                  style={{ textAlign: link.dir }}
                >
                  {link.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
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
  }
`;

export default IndexPage;
