import {
  Color,
  PrimaryButtonProps,
  PrimaryOutlineButtonProps,
  Zindex,
} from "$/design";
import {
  Button,
  Flex,
  HeaderExtension,
  Justifier,
  LangSelection,
  SearchInput,
  SVGLogo,
  SVGLogout,
  SVGPlus,
} from "$/ui";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { SVGEllipse1, SVGEllipse2 } from "$/ui";

export function Header(props) {
  const [mode, setMode] = useState(props.headerMode ?? "initial"); // initial - search - addPost
  const activeExtension = mode === "search" || mode === "addPost";

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
          <Flex>
            <Link href="/" title="logo" className="logo">
              <SVGLogo />
            </Link>
            <div className="logo-divider" />
            {!activeExtension && <SearchInput />}
          </Flex>

          <Flex>
            <LangSelection />
            <Flex
              style={{
                gap: "0.9375rem",
                paddingLeft: "2.75rem",
              }}
            >
              <Button
                {...PrimaryOutlineButtonProps({
                  style: {
                    gap: "7.5px",
                    border: `3px solid ${Color.sub}`,
                  },
                })}
              >
                <SVGLogout />
                Login / Register
              </Button>
              <Button
                {...PrimaryButtonProps({
                  style: {
                    gap: "0.3125rem",
                  },
                })}
                onClick={() => setMode("addPost")}
              >
                <SVGPlus />
                Add a Free Post
              </Button>
            </Flex>
          </Flex>
        </div>
        <HeaderExtension active={activeExtension} headerMode={mode} />
        {activeExtension && (
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
  height: ${(props) =>
    props.headerMode === "search"
      ? "33.125rem"
      : props.headerMode === "addPost"
      ? "37.375rem"
      : "7.125rem"};
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
          justify-content: space-between;
          align-items: flex-start;
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
`;
