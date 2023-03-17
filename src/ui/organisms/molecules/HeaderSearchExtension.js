import { ExtendedSearchInput } from "$/ui/layouts";
import styled from "@emotion/styled";

export function HeaderSearchExtension(props) {
  return (
    <_>
      <p>What Are You Looking For?</p>
      <ExtendedSearchInput />
    </_>
  );
}

const _ = styled.div`
  margin-top: 2.25rem;
  width: 100%;
  max-width: 34rem;

  display: flex;
  flex-direction: column;
  gap: 1.3125rem;

  p {
    font-size: 1rem;
  }
`;
