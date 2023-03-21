import { BreakPoint, Color, Zindex } from "$/design";
import styled from "@emotion/styled";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SVGCloseWhite, SVGPlay } from "../atoms";

export function FilesCarousel(props) {
  return (
    <_>
      <Swiper
        slidesPerView="auto"
        spaceBetween={22}
        grabCursor={true}
        className="mySwiper"
        modules={[FreeMode]}
        freeMode
      >
        {props.files.map((file) => (
          <SwiperSlide>
            <div className={`overlay ${file.type === "video" ? "video" : ""}`}>
              {file.type === "video" && <SVGPlay />}
            </div>
            <button className="close-button">
              <SVGCloseWhite />
            </button>
            <img src={file.file} />
            {file.main && <span>Main Image</span>}
          </SwiperSlide>
        ))}
      </Swiper>
    </_>
  );
}

const _ = styled.div`
  .mySwiper {
    padding-top: 1.25rem;
    padding-bottom: 6.9375rem;
  }

  .swiper-slide {
    min-width: 7.25rem;
    max-width: 7.25rem;
    height: 7.25rem;
    border-radius: 0.3125rem;

    position: relative;
    z-index: ${Zindex.min};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5625rem;

    transition-duration: 250ms;

    .overlay {
      width: 100%;
      height: 100%;
      border-radius: 0.3125rem;

      position: absolute;
      top: 0;
      left: 0;
      z-index: ${Zindex.min};

      background: linear-gradient(
        222.8deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 34.87%
      );

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &.video {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url(.png);
      }
    }

    .close-button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      z-index: ${Zindex.min + 1};

      background-color: transparent;
    }

    &:hover {
      transform: scale(1.125);
      cursor: pointer;

      img {
        border: 4px solid ${Color.sub};
      }

      .overlay {
        height: calc(100% - 4px);
        top: 4px;

        &.video {
          height: calc(100% - 8px);
        }
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.3125rem;

      transition-duration: 100ms;
    }

    span {
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.0625rem;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  @media ${BreakPoint.device.max.md} {
    .swiper {
      padding-bottom: 3rem;
    }
    
    .swiper-slide {
      min-width: 7.5rem;
      max-width: 7.5rem;
    }
  }
`;
