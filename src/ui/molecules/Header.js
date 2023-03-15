import { Color, PrimaryButtonProps, PrimaryOutlineButtonProps } from "$/design";
import {
  Button,
  Flex,
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

export function Header(props) {
  return (
    <_ transparent={props.transparent}>
      <Justifier Style={css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      `}>
        <Flex>
          <Link href="/" title="logo" className="logo">
            <SVGLogo />
          </Link>
          <div className="logo-divider" />
          <SearchInput />
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
            >
              <SVGPlus />
              Add a Free Post
            </Button>
          </Flex>
        </Flex>
      </Justifier>
    </_>
  );
}

const _ = styled.header`
  width: 100%;
  height: 7.125rem;
  padding: 0 3.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) =>
    props.transparent
      ? "transparent"
      : "linear-gradient(108.45deg, #011f28 0%, #0d4e62 99.35%)"};

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
