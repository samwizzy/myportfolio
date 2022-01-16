import React from "react";
import Layout from "../components/Layout";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Tools() {
  return (
    <Layout>
      <title>Tools Page</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-400 mb-4">Tools</h1>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 2, spaceBetween: 30 },
            640: { slidesPerView: 3, spaceBetween: 40 },
          }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {[...Array(10).keys()].map((item) => (
            <SwiperSlide key={item} className="pb-10">
              <Card sx={{ maxWidth: "100%" }} className="">
                <CardMedia
                  component="img"
                  height="140"
                  src="https://image.freepik.com/free-photo/top-view-businessman-suit-talking-phone-while-writing-ideas-stickey-notes-working-financial-strategy-after-analyzing-company-documents-entrepreneur-man-planning-investments-meeting_482257-21435.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Slide {item + 1}
                  </Typography>
                  <Typography variant=""></Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
}

export default Tools;
