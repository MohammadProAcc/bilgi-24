import styled from "@emotion/styled";
import { TextareaGroup, UploadedImages, UploadPostAssets } from "$/ui";
import { css } from "@emotion/react";

const UPLOADED_FILES_MOCK = [
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

export function CreatePostDescriptionStep() {
  return (
    <_>
      <TextareaGroup
        label="Description"
        Style={css`
          max-width: 37.8125rem;
        `}
      />

      <div className="divider" />

      <UploadPostAssets />

      <div className="divider" />

      <UploadedImages files={UPLOADED_FILES_MOCK} />
    </_>
  );
}

const _ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .divider {
    padding-top: 2.5rem;
  }

  .divider-2 {
    padding-top: 4.25rem;
  }
`;
