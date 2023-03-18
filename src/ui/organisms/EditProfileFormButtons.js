import { Color } from "$/design";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export function EditProfileFormButtons() {
  return (
    <_>
      <Button variant="outlined" color="sub" className="prev">
        Discard
      </Button>
      <Button variant="contained" color="sub">
        Save
      </Button>
    </_>
  );
}

const _ = styled.div`
  margin: 5rem auto 5rem auto;

  display: flex;
  justify-content: center;
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
