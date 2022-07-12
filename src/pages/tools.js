import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { HiOutlineStar, HiOutlineArrowRight } from "react-icons/hi";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { graphql } from "gatsby";

function Tools({ data }) {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (data) {
      const nodes = data?.allContentfulTool?.nodes;
      setTools(nodes);
    }
  }, [data]);

  return (
    <Layout>
      <title>Tools Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 py-8">
        <div className="sm:text-left text-center mb-8">
          <span className="text-xs uppercase linethrough">Preferred Tools</span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Most Used Tools
          </h1>
          <p className="text-lg text-gray-800">
            Some of my most used tools and softwares.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 40 },
          }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {tools.map((tool) => (
            <SwiperSlide key={tool.id} className="pb-10">
              <Card
                sx={{
                  maxWidth: "100%",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <div>
                    <div className="flex items-center space-x-1 mb-4">
                      {tool.image && (
                        <img
                          src={tool.image?.file?.url}
                          alt="tool"
                          className="h-8 w-8"
                        />
                      )}
                      <p className="font-medium text-lg text-gray-800">
                        {tool.title}
                      </p>
                    </div>
                    <Typography variant="body1" color="text.secondary">
                      {tool.body}
                    </Typography>
                  </div>

                  <div className="flex w-fit border border-purple-200 rounded-md mt-4 overflow-hidden shadow-sm">
                    <span className="border-r border-purple-200 flex-1 px-2 py-0.5">
                      {tool.star}
                    </span>
                    <span className="flex items-center space-x-1 flex-1 px-2 py-0.5 bg-purple-500 text-white">
                      <span>star</span> <HiOutlineStar />
                    </span>
                  </div>
                </CardContent>
                <CardActions>
                  <div className="px-1 pb-2">
                    <Button
                      size="small"
                      component="a"
                      href={tool.website}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<HiOutlineArrowRight />}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
}

export const data = graphql`
  query MyTools {
    allContentfulTool {
      nodes {
        body
        id
        title
        star
        website
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

export default Tools;
