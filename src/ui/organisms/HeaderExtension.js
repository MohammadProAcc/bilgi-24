import { Color } from "$/design";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { HeaderSearchExtension } from "./molecules";
import { HeaderCreatePostExtension } from "./molecules/HeaderCreatePostExtension";

export function HeaderExtension(props) {
  useEffect(() => {
    console.log(props.headerMode);
  }, [props.headerMode]);

  return (
    <_ data-active={!!props.active}>
      <h1>
        GECMIS OLSUN <span className="highlight">TURKIYE</span>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra
        accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel
        elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem
        mollis Morbi tristique senectus et netus.
      </p>

      {props.headerMode === "search" ? (
        <HeaderSearchExtension />
      ) : (
        props.headerMode === "addPost" && (<HeaderCreatePostExtension />)
      )}
    </_>
  );
}

const _ = styled.div`
  &[data-active="false"] {
    display: none;
  }

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-bottom: 1.3125rem;
    border-bottom: 2px solid ${Color.strokeLight};

    display: inline-block;

    text-align: center;
    font-size: 3.75rem;
    font-weight: 500;
    color: ${Color.strokeLight};

    .highlight {
      font-weight: 700;
      color: ${Color.sub};
    }
  }

  p {
    margin-top: 0.9375rem;
    max-width: 64.5rem;
    text-align: center;
    font-size: 0.875rem;
    color: ${Color.strokeLight};
    line-height: 1.875rem;
  }
`;
