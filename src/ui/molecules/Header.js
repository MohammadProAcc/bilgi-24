import { BreakPoint, Zindex } from "$/design";
import {
  HeaderExtension,
  HeaderLogoSection,
  Justifier,
  SVGEllipse1,
  SVGEllipse2,
} from "$/ui";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { HeaderToolbar } from "./HeaderToolbar";

export function Header(props) {
  const [mode, setMode] = useState(props.headerMode ?? "initial"); // initial - search - addPost
  const activeExtension = mode === "search" || mode === "addPost";

  const isMd = useMediaQuery(BreakPoint.device.min.md);

  return (
    <_ expand={activeExtension} headerMode={mode}>
      <Justifier
        Style={
          activeExtension
            ? css``
            : css`
                justify-content: center;
              `
        }
      >
        <div className="main-header-container">
          <HeaderLogoSection searchInput={!activeExtension} />

          <HeaderToolbar setMode={setMode} />
        </div>

        <HeaderExtension active={isMd && activeExtension} headerMode={mode} />

        {isMd && activeExtension && (
          <>
            <SVGEllipse1
              Style={css`
                position: absolute;
                top: 16.1875rem;
                right: 0;
                z-index: ${Zindex.ellipseBackground};
              `}
            />

            <SVGEllipse2
              Style={css`
                position: absolute;
                top: 0;
                left: 0;
                z-index: ${Zindex.ellipseBackground};
              `}
            />
          </>
        )}
      </Justifier>
    </_>
  );
}

const _ = styled.header`
  width: 100%;
  /* Box Size */
  @media ${BreakPoint.device.min.md} {
    height: ${(props) =>
      props.headerMode === "search"
        ? "33.125rem"
        : props.headerMode === "addPost"
        ? "37.375rem"
        : "7.125rem"};
  }
  padding: 0 3.25rem;
  margin-bottom: ${(props) => props.headerMode === "addPost" && "22.3125rem"};

  position: relative;
  z-index: ${Zindex.header};

  display: flex;
  align-items: center;

  /* Layout */
  ${(props) =>
    props.expand
      ? css`
          @media ${BreakPoint.device.min.md} {
            justify-content: space-between;
            align-items: flex-start;
          }
        `
      : css``}

  /* Background */
  ${(props) =>
    props.expand
      ? css`
          background: linear-gradient(108.45deg, #011f28 0%, #0d4e62 99.35%);
        `
      : css`
          background: linear-gradient(108.45deg, #011f28 0%, #0d4e62 99.35%);
        `}

  .main-header-container {
    width: 100%;
    height: 7.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
  }

  .logo-divider {
    height: 3rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;

    border-left: 1px solid white;
  }

  @media ${BreakPoint.device.max.md} {
    height: 4rem;
    padding: 0 1rem;

    .main-header-container {
      height: 3.125rem;
    }

    .logo {
      width: 5rem;
    }

    .logo-divider {
      display: none;
    }
  }
`;
