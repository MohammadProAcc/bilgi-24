import { CreatePostContext } from "$/contexts";
import { BreakPoint, Color } from "$/design";
import styled from "@emotion/styled";
import { Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

export function CreatePostStepNavigation() {
  const { step, setStep } = useContext(CreatePostContext);

  const isMd = useMediaQuery(BreakPoint.device.min.md);

  function navigate(to) {
    if (to === "prev") {
      setStep((curr) => curr - 1);
    } else if (to === "next") {
      setStep((curr) => curr + 1);
    }
    if (!isMd) {
      window.scrollTo({
        top: 0,
      });
    }
  }

  return (
    <_>
      <Button
        variant="outlined"
        color="sub"
        className="prev"
        disabled={step === 0}
        onClick={() => navigate("prev")}
      >
        Prev
      </Button>
      {/* FIXME: temp */}
      {step === 4 ? (
        <Link href="/preview-post">
          <Button variant="contained" color="sub">
            Next
          </Button>
        </Link>
      ) : (
        <Button
          variant="contained"
          color="sub"
          onClick={() => navigate("next")}
        >
          Next
        </Button>
      )}
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
    /* color: ${Color.strokeDark}; */

    &.prev {
      color: ${Color.strokeDark};
      border-width: 0.1875rem;
    }

    &:disabled {
      color: rgb(1, 31, 40, 50%);
    }
  }
`;
