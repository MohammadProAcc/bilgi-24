import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Color } from "$/design";

export function SegmentedInput(props) {
  const [active, setActive] = React.useState(props.initialValue ?? 0);

  return (
    <Box
      sx={{
        width: "auto",
        height: "3.125rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Color.cardBackground,
        boxShadow: "4px 4px 45px 0px #0000001A",
        "& > *": {
          m: 1,
        },
        "& .MuiButtonBase-root": {
          padding: "0.9375rem 2rem",

          '&[data-active="true"]': {
            fontWeight: 700,
            fontSize: "1rem",
          },
        },
      }}
    >
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        style={{
          margin: "0 0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        color="deactive"
      >
        {props.items?.map((item, index) => (
          <Button
            key={item}
            style={buttonStyles}
            onClick={() => setActive(index)}
            color={active === index ? "sub" : "deactive"}
            data-active={active === index}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

const buttonStyles = {
  height: "1.625rem",
  whiteSpace: "nowrap",
};
