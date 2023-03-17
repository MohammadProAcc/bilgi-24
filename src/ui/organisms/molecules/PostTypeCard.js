import { Color } from "$/design";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";

export function PostTypeCard(props) {
  return (
    <_>
      <div className="title">{props.title}</div>
      <img className="poster" src={`/images/${props.src}`} />
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>
      <Link href="/create-post">
        <Button
          style={{
            width: "11.375rem",
            height: "2.5rem",
            color: Color.strokeDark,
            borderWidth: "0.1875rem",
          }}
          color={props.color}
          variant={props.variant}
        >
          Add Post
        </Button>
      </Link>
    </_>
  );
}

const _ = styled.div`
  width: 23rem;
  height: 29.625rem;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 10px 7px 60px 0px #00000026;
  background-color: ${Color.cardBackground};

  .title {
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 1.6875rem;
    letter-spacing: 0em;
    text-align: center;
    color: ${Color.strokeDark};
  }

  .poster {
    width: 100%;
    max-height: 11.3125rem;
  }

  .description {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.875rem;
    letter-spacing: 0em;
    text-align: center;
    color: ${Color.strokeDark};
  }
`;
