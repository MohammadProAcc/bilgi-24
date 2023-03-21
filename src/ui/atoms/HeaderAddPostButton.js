import { BreakPoint, PrimaryButtonProps } from "$/design";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { SVGPlus } from "./SVGPlus";

export function HeaderAddPostButton(props) {
  return (
    <_>
      <Button
        {...PrimaryButtonProps({
          style: {
            gap: "0.3125rem",
          },
        })}
        {...props}
      >
        <SVGPlus />
        <span className="text">Add a Free Post</span>
      </Button>
    </_>
  );
}

const _ = styled(Box)`
  .MuiButtonBase-root {
    height: 2.5rem;
  }

  @media ${BreakPoint.device.min.md} and (max-width: 67.8125rem) {
    .MuiButtonBase-root {
      height: 2rem;
    }

    .text {
      display: none;
    }
  }
`;
