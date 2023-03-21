import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { BreakPoint, Color } from "$/design";
import styled from "@emotion/styled";

export function SegmentedInput(props) {
  const [active, setActive] = React.useState(props.initialValue ?? 0);

  return (
    <_>
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
    </_>
  );
}

const buttonStyles = {
  height: "1.625rem",
  whiteSpace: "nowrap",
};

const _ = styled.div`
  width: auto;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Color.cardBackground};
  box-shadow: 4px 4px 45px 0px #0000001a;

  > * {
    margin: 0.625rem;
  }

  .MuiButtonBase-root {
    padding: 0.9375rem 2rem;

    &[data-active="true"] {
      font-weight: 700;
      font-size: 1rem;
    }
  }

  @media ${BreakPoint.device.max.md} {
    width: 100%;
    height: auto;

    .MuiButtonGroup-root {
      flex-direction: column;
    }

    .MuiButtonBase-root {
      width: 100%;
      height: 3rem;
    }

    .MuiButtonGroup-root {
      width: 90%;
    }

    .mui-style-1sbr1te-MuiButtonGroup-root
      .MuiButtonGroup-grouped:not(:last-of-type) {
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.23);
    }
  }
`;
