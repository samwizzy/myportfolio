import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { HiOutlineClock, HiOutlineArrowRight } from "react-icons/hi";
import slugify from "slugify";

function Articles({ data }) {
  const articles = data.articles.nodes;

  return (
    <Layout>
      <title>Article Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-8">
        <div className="sm:text-left text-center mb-8">
          <span className="text-xs uppercase mb-2 linethrough">Tech talk</span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Articles</h1>
          <p className="text-lg text-gray-800">We talk about everything that bothers around technology.</p>
        </div>

        <div className="grid grid-cols-12 sm:gap-x-12 gap-x-0 gap-y-8">
          {articles.map((article) => (
            <Card key={article.id} sx={{ maxWidth: "100%" }} className="sm:col-span-6 col-span-12">
              <CardMedia
                component="img"
                height="140"
                src="https://image.freepik.com/free-photo/top-view-businessman-suit-talking-phone-while-writing-ideas-stickey-notes-working-financial-strategy-after-analyzing-company-documents-entrepreneur-man-planning-investments-meeting_482257-21435.jpg"
                alt="green iguana"
              />
              <CardContent>
                <div className="mb-3">
                  <Link className="text-2xl font-bold text-gray-800" to={`/articles/${slugify(article.title)}`}>
                    {article.title}
                  </Link>
                  <div className="mb-2" />

                  <Stack direction="row" spacing={2} alignItems="center">
                    <div className="flex items-center text-sm text-gray-800">
                      <Avatar
                        sx={{ width: 24, height: 24, mr: 0.5 }}
                        alt="Samuel Okeke"
                        src="https://ik.imagekit.io/3ugevgshj2i/samjpg_M6cSaT7Vjxu.jpg?updatedAt=1641379507144"
                      />
                      <span className="text-sm text-gray-600 capitalize">samuel okeke</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <HiOutlineClock />
                      <span className="text-sm">21 Jan, 2022 09:30</span>
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
                <div className="px-1 pb-2">
                  <Button
                    size="small"
                    component={Link}
                    to={`/articles/${slugify(article.title)}`}
                    endIcon={<HiOutlineArrowRight />}
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

export function Head() {
  return <title>Articles</title>;
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
