import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";

function Articles({ data }) {
  const articles = data.articles.nodes;

  return (
    <Layout>
      <title>Article Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-8">
        <h1 className="text-3xl font-bold text-gray-400 mb-4">Article</h1>

        <div className="grid grid-cols-12 sm:gap-x-8 gap-x-0 gap-y-8">
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 800, mb: 3 }}
                >
                  {article.title}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.body?.childMarkdownRemark?.html,
                  }}
                />
              </CardContent>
              <CardActions>
                <div className="px-3">
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={`/articles/${article.slug}`}
                  >
                    Learn More
                  </Button>
                </div>
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
        id
        title
        slug
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
