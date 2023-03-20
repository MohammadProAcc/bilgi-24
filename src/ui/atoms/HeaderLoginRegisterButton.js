import { Color, PrimaryOutlineButtonProps } from "$/design";
import { Button } from "@mui/material";
import { SVGLogout } from "./SVGLogout";

export function HeaderLoginRegisterButton(props) {
  return (
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
      Login / Register
    </Button>
  );
}
