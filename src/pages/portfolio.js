import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { HiOutlineArrowRight } from "react-icons/hi";

function Portfolio({ data }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data) {
      const nodes = data?.allContentfulProject?.nodes;
      setProjects(nodes);
    }
  }, [data]);

  return (
    <Layout>
      <title>Portfolio Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-8">
        <div className="sm:text-left text-center mb-8">
          <span className="text-xs uppercase">Projects</span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Portfolio</h1>
          <p className="text-lg text-gray-600">
            Just a peek through some of the amazing projects I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-12 sm:gap-8 gap-x-0 gap-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="card sm:col-span-6 col-span-12"
            >
              <CardMedia
                component="img"
                height="140"
                sx={{
                  maxWidth: "100%",
                  maxHeight: 400,
                  objectPosition: "50% 0",
                }}
                src={
                  project.displayImage
                    ? project.displayImage.file.url
                    : "https://image.freepik.com/free-photo/top-view-businessman-suit-talking-phone-while-writing-ideas-stickey-notes-working-financial-strategy-after-analyzing-company-documents-entrepreneur-man-planning-investments-meeting_482257-21435.jpg"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {project.body}
                </Typography>
              </CardContent>
              <CardActions>
                <div className="px-1 pb-2">
                  <Button
                    size="small"
                    component="a"
                    href={project.projectUrl}
                    target="_blank"
                    endIcon={<HiOutlineArrowRight />}
                  >
                    Learn More
                  </Button>
                </div>
              </CardActions>
            </Card>
          ))}
        </div>

        <p className="text-gray-800 mt-6">
          You want to see more? Visit{" "}
          <a
            href="https://github.com/samwizzy/"
            rel="noreferrer"
            target="_blank"
            className="text-purple-500 hover:text-purple-600"
          >
            GitHub
          </a>
        </p>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query MyProjects {
    allContentfulProject {
      nodes {
        id
        title
        body
        projectUrl
        displayImage {
          file {
            url
          }
        }
      }
    }
  }
`;

export default Portfolio;
