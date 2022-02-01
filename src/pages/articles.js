import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { HiOutlineClock } from "react-icons/hi";
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
                <div className="mb-3">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-gray-600 font-bold"
                  >
                    <Link to={`/articles/${slugify(article.title)}`}>
                      {article.title}
                    </Link>
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <div className="flex items-center text-sm text-gray-800">
                      <Avatar
                        sx={{ width: 24, height: 24, mr: 0.5 }}
                        alt="Samuel Okeke"
                        src="https://ik.imagekit.io/3ugevgshj2i/samjpg_M6cSaT7Vjxu.jpg?updatedAt=1641379507144"
                      />
                      <span className="text-sm text-gray-800">
                        Samuel Okeke
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-800">
                      <HiOutlineClock />
                      <span className="text-sm">21 Jan 2022 09:30</span>
                    </div>
                  </Stack>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.body?.childMarkdownRemark?.excerpt,
                  }}
                />
              </CardContent>
              <CardActions>
                <div className="px-2 pb-2">
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
