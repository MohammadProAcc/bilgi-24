import { BreakPoint, Color, PrimaryOutlineButtonProps } from "$/design";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { SVGLogout } from "./SVGLogout";

export function HeaderLoginRegisterButton(props) {
  return (
    <_>
      <Button
        {...PrimaryOutlineButtonProps({
          style: {
            gap: "7.5px",
            border: `3px solid ${Color.sub}`,
          },
        })}
        {...props}
      >
        <SVGLogout />
        <span className="text">Login / Register</span>
      </Button>
    </_>
  );
}

const _ = styled(Box)`
  @media ${BreakPoint.device.min.md} and (max-width: 67.8125rem) {
    .text {
      display: none;
    }
  }
`;
