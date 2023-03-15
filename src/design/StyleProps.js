import { Color } from "$/design";

export const PrimaryButtonProps = (props) => ({
  style: {
    backgroundColor: Color.sub,
    color: Color.stroke,
    ...props.style,
  },
  variant: "contained",
});

export const PrimaryOutlineButtonProps = (props) => ({
  style: {
    backgroundColor: Color.main,
    color: Color.strokeLight,
    ...props?.style,
  },
  variant: "outlined",
});
