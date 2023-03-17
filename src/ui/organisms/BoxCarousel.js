import { Box, Divider, Grid, Typography } from "@mui/material";
import { CarouselCards } from "$/ui/organisms";
import { Swiper, SwiperSlide } from "swiper/react";

export function BoxCarousel(props) {
  return (
    <Grid container direction="column" sx={{padding:"93px",...props.sxGridMain}}>
      <Grid container direction="row" gap="10px" alignItems="center">
        <Typography
          sx={{ color: "#1E1E1E", fontSize: "18px", fontWeight: 400 }}
        >
          {props.carouselTitle}
        </Typography>
        <Divider sx={{ height: "1px", width: "75%", borderColor: "#1E1E1E",opacity: 0.2,...props.sxDivider }} />
      </Grid>
      <Box sx={{ width: "82%",...props.sxSwiperBox}}>
        <Swiper
          slidesPerView={3.5}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselCards srcImage="/images/list-view-pic1.png" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Grid>
  );
}
