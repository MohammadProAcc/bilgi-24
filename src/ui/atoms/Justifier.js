import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Justifier = styled(Box)`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  ${(props) => props.Style}
`;
