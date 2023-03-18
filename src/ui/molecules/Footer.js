import { FOOTER_ITEMS } from "$/constants";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Justifier } from "$/ui";
import Link from "next/link";
import { Color } from "$/design";

export function Footer() {
  return (
    <_>
      <Justifier
        Style={css`
          width: 100%;
          height: 100%;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {FOOTER_ITEMS.columns.map((column) => (
          <ul key={column.id}>
            <div className="column-title">{column.title}</div>
            {column.items.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        ))}
      </Justifier>
    </_>
  );
}

const _ = styled.footer`
  height: 12.0625rem;
  background: linear-gradient(108.45deg, #011f28 0%, #0d4e62 99.35%);

  .column-title {
    font-size: 1.125rem;
    color: ${Color.strokeLight};

    margin-bottom: 1.5625rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .625rem;

    li {
      transform: translateX(1.125rem);
      list-style: disc;

      &::marker {
        color: ${Color.sub};
        background-color: ${Color.sub};
        font-size: 1.25rem;
      }
    }
  }
`;
