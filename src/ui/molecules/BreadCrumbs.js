import styled from "@emotion/styled";
import { v4 } from "uuid";

export function BreadCrumbs(props) {
  return (
    <_>
      {props.items.map((breadCrumb) => (
        <li key={v4()}>{breadCrumb}</li>
      ))}
    </_>
  );
}

const _ = styled.ul`
  height: 0.9375rem;
  display: flex;
  gap: 2rem;

  li {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    position: relative;

    &:not(:last-child) {
      &::after {
        height: 0.375rem;
        content: ">";
        position: absolute;
        top: 50%;
        right: -1.125rem;
        transform: translateY(-50%);

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &:last-child {
      font-weight: 500;
    }
  }
`;
