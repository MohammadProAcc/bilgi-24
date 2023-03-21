import { Zindex } from "$/design";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";

const CAROUSEL_FILES_MOCK = [
  {
    original: "/images/list-view-pic1.png",
    thumbnail: "/images/list-view-pic1.png",
    type: "image",
    main: true,
  },
  {
    original: "/images/list-view-pic2.jpg",
    thumbnail: "/images/list-view-pic2.jpg",
    type: "image",
  },
  {
    original: "/images/list-view-pic3.png",
    thumbnail: "/images/list-view-pic3.png",
    type: "image",
  },
  {
    original: "/images/list-view-pic4.jpeg",
    thumbnail: "/images/list-view-pic4.jpeg",
    type: "image",
  },
  {
    original: "/images/list-view-pic5.png",
    thumbnail: "/images/list-view-pic5.png",
    type: "image",
  },
  {
    original: "/images/list-view-pic6.jpg",
    thumbnail: "/images/list-view-pic6.jpg",
    type: "image",
  },
  {
    original: "/images/list-view-pic7.png",
    thumbnail: "/images/list-view-pic7.png",
    type: "image",
  },
  {
    original: "/images/list-view-pic8.jpg",
    thumbnail: "/images/list-view-pic8.jpg",
    type: "video",
  },
];

export function PreviewPostImagesCarousel() {
  return (
    <_>
      <ImageGallery items={CAROUSEL_FILES_MOCK} showIndex />
    </_>
  );
}

const _ = styled(Box)`
  min-width: 23.125rem;
  max-width: 23.125rem;

  .image-gallery-swipe {
    min-width: 23.125rem;
    max-width: 23.125rem;
    height: 23.125rem;

    .image-gallery-slides {
      width: 100%;
      height: 100%;

      .image-gallery-slide {
        width: 100%;
        height: 100%;

        &::after {
          content: " ";
          width: 100%;
          height: 100%;
          border-radius: 0.625rem;

          position: absolute;
          top: 0;
          left: 0;

          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 78.65%,
            rgba(0, 0, 0, 0.5) 100%
          );
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 0.625rem;

          object-fit: cover;
        }
      }
    }
  }

  .image-gallery-index {
    width: 4.625rem;
    height: 1.125rem;
    padding: 0;

    top: auto;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    gap: 0.25rem;

    background-color: transparent;
  }

  .image-gallery-left-nav {
    width: 1.5625rem;
    height: 1.9375rem;
    padding: 0;
    margin: 0;

    left: 7.75rem;
    top: auto;
    bottom: 0;

    svg {
      width: 1.5625rem;
      height: 1.9375rem;
    }
  }

  .image-gallery-right-nav {
    width: 1.5625rem;
    height: 1.9375rem;
    padding: 0;
    margin: 0;

    right: 7.75rem;
    top: auto;
    bottom: 0;

    svg {
      width: 1.5625rem;
      height: 1.9375rem;
    }
  }

  .image-gallery-play-button,
  .image-gallery-fullscreen-button {
    display: none;
  }

  .image-gallery-thumbnails-container {
    padding-top: 0.5rem;
  }

  .image-gallery-thumbnails-container {
    padding-bottom: 2rem;
  }

  .image-gallery-thumbnail {
    min-width: 4rem;
    max-width: 4rem;
    height: 4rem;

    border-color: transparent;

    &:hover {
      border-color: transparent;

      span {
        &::after {
          background: transparent;
        }
      }
    }

    &.active {
      border-color: transparent;

      span {
        &::after {
          background: transparent;
        }
      }
    }

    span {
      width: 100%;
      height: 100%;

      position: relative;

      &::after {
        content: " ";
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;

        position: absolute;
        top: 0;
        left: 0;

        background: #00000080;
      }

      &::before {
        content: " ";
        min-width: 0.75rem;
        max-width: 0.75rem;
        height: 0.75rem;

        position: absolute;
        bottom: -1.375rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: ${Zindex.min + 1};

        background-image: url("/images/close-sub.svg");
        background-repeat: no-repeat;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.25rem;
      }
    }
  }
`;
