import { graphql, Link, withPrefix } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { classNames } from "../utils/helpers";
import Stack from "@mui/material/Stack";
import WorkTimeline from "../components/partials/WorkTimeline";
import { HiOutlineCalendar, HiOutlineBriefcase, HiOutlineBadgeCheck } from "react-icons/hi";
import { ImFilePdf } from "react-icons/im";
import CountUp from "react-countup";

const AboutPage = ({ data }) => {
  const { profile } = data;

  return (
    <Layout>
      <title>Home Page</title>

      <div className="w-full h-96 bg-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-8">
            <div className="sm:col-span-6 col-span-12 sm:pt-24 pt-10 sm:text-left text-center">
              <h1 className="text-xl text-purple-200 ml-1 -mb-3">I am</h1>
              <h1 className="sm:text-9xl text-7xl font-thin text-purple-200 mb-6">
                Samuel <span className="font-black text-gray-50">Okeke</span>
              </h1>

              <p className="sm:text-xl text-lg text-gray-200 sm:mb-8 mb-6">
                Works easy to work smart, apply logic and reapply precedence.
                <br />
                Creativity is intelligence having fun. — Albert Einstein
              </p>

              <Stack direction="row" spacing="16px" justifyContent={{ sm: "flex-start", xs: "center" }}>
                <Link
                  className="rounded-full sm:text-xl text-lg shadow-md bg-secondary-main hover:bg-secondary-dark text-white hover:text-white px-6 py-2.5"
                  to="/tools"
                >
                  Tools
                </Link>
                <Link
                  className="rounded-full sm:text-xl text-lg shadow-md bg-white hover:bg-purple-600 text-purple-900 hover:text-white px-6 py-2.5"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </Stack>
            </div>
            <div className="sm:col-span-6 col-span-12 sm:pt-16 sm:block justify-self-end hidden">
              <img src="iPhonePro.svg" alt="anime" className=" h-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:bg-purple-900 spacer layer"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ul>
          <li className="sm:mb-16 mb-8">
            <span className="text-primary-dark text-sm uppercase">Who am I?</span>
            <h2 className="text-secondary-dark text-6xl font-bold">Biography</h2>
          </li>
          {profile.nodes.map((link) => (
            <li key={link.id} className="py-4">
              <div>
                <h3
                  className={classNames(
                    "text-gray-600 text-2xl font-normal uppercase mb-3",
                    link.isUnderlined && "partial-line"
                  )}
                >
                  {link.title}
                </h3>

                <p className="text-gray-400 font-medium space-x-2">
                  {link.reference &&
                    link.reference.map((ref) => (
                      <span key={ref} className="bg-primary-dark text-white p-1.5 rounded-md text-xs font-bold">
                        {ref}
                      </span>
                    ))}
                </p>
                <div
                  className="text-gray-600 text-lg leading-7"
                  dangerouslySetInnerHTML={{
                    __html: link.body?.childMarkdownRemark?.html,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-purple-50 counter-bg shadow-sm mt-4 sm:p-16 px-8 py-16">
        <div className="bg-white max-w-7xl mx-auto shadow-md rounded-2xl sm:p-16 py-16 text-center">
          <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-8">
            <div className="flex flex-col items-center sm:col-span-4 col-span-12 sm:border-r sm:border-gray-200">
              <HiOutlineCalendar size="48" className=" text-purple-600" />
              <span className="text-lg font-normal text-purple-600 tracking-wide">Companies</span>
              <CountUp className="text-7xl font-thin text-gray-500" start={0} end={5} delay={2.5} />
            </div>
            <div className="flex flex-col items-center sm:col-span-4 col-span-12 sm:border-r sm:border-gray-200">
              <HiOutlineBadgeCheck size="48" className="text-purple-600" />
              <span className="text-lg font-normal text-purple-600 tracking-wide">Projects</span>
              <CountUp className="text-7xl font-thin text-gray-500" start={0} end={6} delay={2.5} />
            </div>
            <div className="flex flex-col items-center sm:col-span-4 col-span-12">
              <HiOutlineBriefcase size="48" className="text-purple-600" />
              <span className="text-lg font-normal text-purple-600 tracking-wide">Contracts</span>
              <CountUp className="text-7xl font-thin text-gray-500" start={0} end={3} delay={2.5} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-900 shadow-sm mb-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-12 sm:gap-10 gap-x-0 gap-y-8">
            <div className="sm:col-span-6 col-span-12 flex items-center px-4 sm:px-6 lg:px-8 sm:py-8 py-4 bg-slate-600 bg-timeline relative">
              <div className="w-full justify-between bg-black sm:p-16 p-8 bg-transition">
                <h2 className="flex items-center space-x-1 text-6xl font-bold text-purple-200 mb-4">
                  <p>
                    Job <span className="font-light">History</span>
                  </p>
                  <ImFilePdf size={24} className="sm:block hidden" />
                </h2>
                <p className="text-base text-gray-200 mb-4">
                  Its been quite a journey for me, I can now see where this road leads.
                  <br />I want you to know how far I have come.
                </p>

                <div className="sm:space-x-3 space-x-2 space-y-2">
                  <a
                    href={withPrefix("./resume.pdf")}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600 rounded-sm px-4 py-2"
                  >
                    View CV
                  </a>
                  <a
                    href={withPrefix("./resume.pdf")}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border border-purple-600 text-purple-400 hover:text-white hover:bg-purple-600 rounded-sm px-4 py-2"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:col-span-6 col-span-12 px-4 sm:px-6 lg:px-8 sm:py-16 py-8">
              <WorkTimeline />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div>
          <span className="text-sm font-mono">Proudly Designed with</span>
          <img
            className="ml-2 inline-block icon"
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
          <img
            className="ml-2 inline-block h-6 icon"
            alt="Material UI"
            src="https://img.icons8.com/color/50/000000/material-ui.png"
          />
          <img
            className="ml-2 inline-block h-6 icon"
            alt="GraphQL"
            src="https://img.icons8.com/color/48/000000/graphql.png"
          />
          <img
            className="ml-2 inline-block h-6 icon"
            alt="Tailwind CSS"
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          />
          <img className="ml-2 inline-block h-6 icon" alt="Contentful" src="/contentful.svg" />
        </div>

        <p className="text-sm font-mono mt-4">
          Follow me @ <code className="text-sm rounded-md p-2 bg-purple-100 text-purple-600">@sampedia</code> to know
          more about me.
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`query AboutSiteData {
  site {
    siteMetadata {
      title
      siteUrl
    }
  }
  profile: allContentfulProfile(sort: {createdAt: ASC}) {
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
}`;

export default AboutPage;
