import { CreatePostContext } from "$/contexts";
import { Color } from "$/design";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useContext } from "react";

export function CreatePostStepNavigation() {
  const { step, setStep } = useContext(CreatePostContext);

  return (
    <_>
      <Button
        variant="outlined"
        color="sub"
        className="prev"
        disabled={step === 0}
        onClick={() => setStep((curr) => curr - 1)}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        color="sub"
        disabled={step === 4}
        onClick={() => setStep((curr) => curr + 1)}
      >
        Next
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
