import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

function Articles({ data }) {
  const articles = data.articles.nodes;

  console.log(articles, "articles");

  return (
    <Layout>
      <title>Article Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-400 mb-4">Article</h1>

        <div className="grid grid-cols-12 gap-x-8 gap-y-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              sx={{ maxWidth: "100%" }}
              className="sm:col-span-4 col-span-12"
            >
              <CardMedia
                component="img"
                height="140"
                src="https://image.freepik.com/free-photo/top-view-businessman-suit-talking-phone-while-writing-ideas-stickey-notes-working-financial-strategy-after-analyzing-company-documents-entrepreneur-man-planning-investments-meeting_482257-21435.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {article.title}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.body?.childMarkdownRemark?.html,
                  }}
                />
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query ArticlesPage {
    articles: allContentfulArticle {
      nodes {
        title
        id
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default Articles;
