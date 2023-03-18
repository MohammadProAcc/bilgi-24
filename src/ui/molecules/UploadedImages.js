import styled from "@emotion/styled";
import { TitleBar } from "../atoms";
import { FilesCarousel } from "./FilesCarousel";

export function UploadedImages(props) {
  return (
    <_>
      <TitleBar title="Files" />
      <FilesCarousel files={props.files} />
    </_>
  );
}

const _ = styled.div`
  width: 100%;
  max-width: 65.9375rem;
`;
