import { BreakPoint, Color, PrimaryOutlineButtonProps } from "$/design";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";
import { SVGProfile } from "../atoms";
import { HeaderProfileMenu } from "./HeaderProfileMenu";

export function HeaderProfileButton() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <_>
      <Button
        {...PrimaryOutlineButtonProps({
          style: {
            gap: "7.5px",
            border: `3px solid ${Color.sub}`,
          },
        })}
        onClick={() => setShowMenu((o) => !o)}
      >
        <SVGProfile />
        <span className="text">Morteza Shirinzadeh</span>
      </Button>
      {showMenu && (
        <HeaderProfileMenu closeCallback={() => setShowMenu(false)} />
      )}
    </_>
  );
}

const _ = styled.div`
  position: relative;
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
