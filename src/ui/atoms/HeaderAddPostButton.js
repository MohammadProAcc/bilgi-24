import { PrimaryButtonProps } from "$/design";
import { Button } from "@mui/material";
import { SVGPlus } from "./SVGPlus";

export function HeaderAddPostButton(props) {
  return (
    <Button
      {...PrimaryButtonProps({
        style: {
          gap: "0.3125rem",
        },
      })}
      {...props}
    >
      <SVGPlus />
      Add a Free Post
    </Button>
  );
}
