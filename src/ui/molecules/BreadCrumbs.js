import { BreakPoint } from "$/design";
import styled from "@emotion/styled";
import { v4 } from "uuid";

export function BreadCrumbs(props) {
  return (
    <_ Style={props.Style}>
      {props.items.map((breadCrumb) => (
        <li key={v4()}>{breadCrumb}</li>
      ))}
    </_>
  );
}

const _ = styled.ul`
  height: 0.9375rem;
  display: flex;
  column-gap: 2rem;
  row-gap: 0.5rem;

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

  @media ${BreakPoint.device.max.md} {
    flex-wrap: wrap;

    li {
      white-space: nowrap;
    }
  }

  ${(props) => props.Style}
`;
