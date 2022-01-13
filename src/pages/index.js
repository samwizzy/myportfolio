import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { classNames } from "../utils/helpers";

const docLink = {
  text: "Biography",
};

const links = [
  {
    text: "Introduction",
    description:
      "My name is Samuel, I am an enthusiastic Software Developer. I hail from the South-east, particularly from a state called Anambra. I like what I do, because it makes me feel like a superhuman😀. If there is one thing that gives me joy the most, its proffering solution to complex issues that usually appear as blockers. I like to make development easy, so I practice in-depth on ways to simplify solutions. I like to tell my colleagues that if it doesn't feel great then it's not best practice.",
    dir: "center",
  },
  {
    text: "How I started",
    description:
      "Unlike most people, i am not a computer science alumnus as i had not known what the future holds for me. After graduating from the University, I made a decision to become a database administrator, so i picked Oracle as the database system to study. As at the time, Oracle was a big name, and i wanted to tell my friend i am an Oracle expert. After 6 months, I got my OCA certificate after my training and exams. As months passed by, I couldn't do much with my knowledge and getting a job was far-fetched as my skill wasn't in high demand. I began to joggle from a pool of courses on a brochure for a certain institute, until I came to a conclusion that i would have to pick up another skill and so I enrolled for an internship at an IT firm where i was learning Web Development. As i continued learning, i was tested on my progress and skills, and i they saw that i was good, and so i was assign to a class where i started tutoring student that came to the institute for training, it was a tough paradigm but i was so determined that i become very good at learning and passing on my experience to students.",
    dir: "center",
  },
  {
    text: "In 5 years",
    description:
      "In five years from now, I should be at the top of my career, building well-known and renowned applications that will become an household name. At this time, I would achieve quite a handful of my vision which is to be a pioneer to the next big thing. In the past years, I have worked companies where I had a platform to explore, collaborate and grow to where I am now. If I am working with you then I am adding great values to the growth of the company. I want to gain experience that moves through the development processes to the administrative channels, as this could set me up for a strategic and pivotal role in the company.",
    dir: "center",
  },
  {
    text: "Personality Guides",
    description:
      "The concept of Personality is more broad than we think it is but I will make this brief. I am a September born, proud Virgo as I like to call myself, I am more fixated about getting results (goal oriented), I like to be in charge of my situation. I am mostly indoors as I am an ambivert, however my introverted side screams more than the extroverted side of me. I want to work in a team with a rich culture for collaboration, communication and love, an environment where we all respect each other.",
    dir: "center",
  },
  {
    text: "My Aspirations",
    description:
      "I would like to own a tech start-up with some of the best & experienced developers ever, to deliver world class applications like Paystack, Flutterwave etc. I would love to own a radio station because I enjoy what that sector does for the common people in the country.",
    dir: "center",
  },
  {
    text: "References",
    description: "",
    lists: ["Okeme", "Kelechi", "Afeez", "Abiodun"],
    dir: "left",
  },
];

const IndexPage = ({ data }) => {
  console.log(data, "data");

  return (
    <Layout>
      <title>About Me Page</title>

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
            <h2 className="text-purple-500 text-3xl font-black">
              {docLink.text}
            </h2>
          </li>
          {links.map((link) => (
            <li key={link.text} className="pb-8">
              <div>
                <h3
                  className={classNames(
                    "text-purple-500 text-2xl font-bold uppercase mb-8",
                    link.dir === "center" && "partial-line"
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
                  className="text-gray-400 leading-8 text-sm font-medium"
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
