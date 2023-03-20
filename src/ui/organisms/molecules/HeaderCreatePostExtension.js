import { BreakPoint } from "$/design";
import styled from "@emotion/styled";
import { PostTypeCard } from "./PostTypeCard";

export function HeaderCreatePostExtension(props) {
  return (
    <_>
      <PostTypeCard
        title="Post As Person"
        src="post-as-person.svg"
        color="sub"
        variant="outlined"
      />
      <PostTypeCard
        title="Post As Company"
        src="post-as-company.svg"
        color="sub"
        variant="contained"
      />
    </_>
  );
}

const _ = styled.div`
  margin-top: 2.25rem;

  display: flex;
  justify-content: center;
  gap: 3.125rem;

  @media ${BreakPoint.device.max.md} {
    width: 100%;
    flex-direction: column;
  }
`;
