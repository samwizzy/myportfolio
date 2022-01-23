import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import slugify from "slugify";

function Articles({ data }) {
  const articles = data.articles.nodes;

  return (
    <Layout>
      <title>Article Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-8">
        <h1 className="text-3xl font-bold text-gray-600 mb-4">Articles</h1>

        <div className="grid grid-cols-12 sm:gap-x-12 gap-x-0 gap-y-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              sx={{ maxWidth: "100%" }}
              className="sm:col-span-6 col-span-12"
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
                  className="text-gray-600"
                >
                  {article.title}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.body?.childMarkdownRemark?.excerpt,
                  }}
                />
              </CardContent>
              <CardActions>
                <div className="px-2">
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={`/articles/${slugify(article.title)}`}
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
            excerpt(format: HTML)
          }
        }
      }
    }
  }
`;

export default Articles;
