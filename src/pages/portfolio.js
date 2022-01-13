import React from "react";
import { graphql } from "gatsby";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { useState } from "react";
import { useEffect } from "react";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-400 mb-4">Portfolio</h1>

        <div className="grid grid-cols-12 sm:gap-x-8 gap-x-0 gap-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{ maxWidth: "100%" }}
              className="card sm:col-span-4 col-span-12"
            >
              <CardMedia
                component="img"
                height="140"
                sx={{
                  maxWidth: "100%",
                  maxHeight: 400,
                  objectPosition: "50% 0%",
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
                <Typography variant="body2" color="text.secondary">
                  {project.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button
                  size="small"
                  component="a"
                  href={project.projectUrl}
                  target="_blank"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
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
