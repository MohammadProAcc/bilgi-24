import { BreakPoint } from "$/design";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Justifier = styled(Box)`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media ${BreakPoint.device.min.md} {
    max-width: 92rem;
    padding: 0 1rem;
  }

  ${(props) => props.Style}
`;
