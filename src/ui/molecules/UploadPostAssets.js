import { BreakPoint } from "$/design";
import styled from "@emotion/styled";
import { UploadInput } from "../atoms";

export function UploadPostAssets() {
  return (
    <_>
      <UploadInput
        label="Add Image"
        buttonLabel="Upload Image"
        icon="/images/image.svg"
      />
      <UploadInput
        label="Add Video (optional)"
        buttonLabel="Upload Video"
        icon="/images/video.svg"
      />
      <UploadInput
        label="Add CAD File (optional)"
        buttonLabel="Upload File"
        icon="/images/file.svg"
      />
    </_>
  );
}

const _ = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.75rem;

  @media ${BreakPoint.device.max.md} {
    flex-direction: column;
  }
`;
