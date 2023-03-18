import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Zindex } from "$/design";
import { useNonInitialEffect } from "$/hooks";
import { SVGCloseSub } from "$/ui/atoms";

const CAROUSEL_FILES_MOCK = [
  {
    file: "/images/list-view-pic1.png",
    type: "image",
    main: true,
  },
  {
    file: "/images/list-view-pic2.jpg",
    type: "image",
  },
  {
    file: "/images/list-view-pic3.png",
    type: "image",
  },
  {
    file: "/images/list-view-pic4.jpeg",
    type: "image",
  },
  {
    file: "/images/list-view-pic5.png",
    type: "image",
  },
  {
    file: "/images/list-view-pic6.jpg",
    type: "image",
  },
  {
    file: "/images/list-view-pic7.png",
    type: "image",
  },
  {
    file: "/images/list-view-pic8.jpg",
    type: "video",
  },
];
export function Carousel(props) {
  const [swiper, setSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  `;

  return (
    <Box
      sx={{
        width: "370px",
        height: "fit-content",
        "& .swiper-slide": {
          aspectRatio: "1/1",
          "&.thumb-slide": {
            position: "relative",
            paddingBottom: "0.9375rem",
            "& .overlay": {
              width: "100%",
              height: "calc(100% - 1.3125rem)",
              borderRadius: "0.5rem",
              position: "absolute",
              top: "0",
              left: "0",
              background: "#00000080",
            },
          },
          "& svg": {
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: Zindex.max,
          },
          "& .overlay": {
            width: "100%",
            height: "calc(100% - 0.375rem)",
            borderRadius: "1rem",
            position: "absolute",
            top: "0",
            left: "0",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 78.65%, rgba(0, 0, 0, 0.5) 100%)",
          },
        },
        "& .swiper-button-prev": {
          top: "auto",
          bottom: "0.75rem",
          left: "8.75rem",
          zIndex: Zindex.max - 1,
        },
        "& .swiper-button-next": {
          top: "auto",
          bottom: "0.75rem",
          right: "8.75rem",
          zIndex: Zindex.max - 1,
        },
      }}
    >
      <Swiper
        onSwiper={setSwiper}
        pagination={{
          type: "fraction",
        }}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-pagination-color": "white",
          "--swiper-navigation-size": "16px",
          "--swiper-pagination-fraction-color": "white",
          // "--swiper-navigation-sides-offset":"130px",
          // "--swiper-navigation-top-offset":"94.5%",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {CAROUSEL_FILES_MOCK.map((image) => (
          <SwiperSlide key={image.file}>
            <div className="overlay" />
            <Image src={image.file} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {CAROUSEL_FILES_MOCK.map((image, index) => (
          <SwiperSlide key={image.file} className="thumb-slide">
            {swiper?.activeIndex !== index && <div className="overlay" />}
            <Image src={image.file} />
            <SVGCloseSub />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
