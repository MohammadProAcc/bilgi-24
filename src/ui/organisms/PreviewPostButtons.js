import { Color } from "$/design";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export function PreviewPostButtons() {
  return (
    <_>
      <Button variant="outlined" color="sub" className="prev">
        Post
      </Button>
      <Button variant="contained" color="sub">
        Print
      </Button>
    </_>
  );
}

const _ = styled.div`
  margin: 3.75rem auto 5rem auto;

  display: flex;
  gap: 1rem;

  button {
    width: 6.5rem;
    height: 2.25rem;

    &.prev {
      color: ${Color.strokeDark};
      border-width: 0.1875rem;
    }

    &:disabled {
      color: rgb(1, 31, 40, 50%);
    }
  }
`;
