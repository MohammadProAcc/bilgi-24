import { Color } from "$/design";
import styled from "@emotion/styled";
import { useClickOutside } from "@mantine/hooks";
import Link from "next/link";
import {
  SVGAds,
  SVGCart,
  SVGFavorite,
  SVGLogoutSmall,
  SVGMessages,
} from "../atoms";

export function HeaderProfileMenu(props) {
  const ref = useClickOutside(() => props.closeCallback());

  return (
    <_ ref={ref}>
      <div className="header">
        <img className="avatar" src="/images/avatar-round.svg" />
        <span>Profile</span>
      </div>
      <ul>
        <Link href="#">
          <li>
            <SVGAds />
            <span>My Ads</span>
          </li>
        </Link>
        <Link href="#">
          <li>
            <SVGMessages />
            <span>Messages</span>
          </li>
        </Link>
        <Link href="#">
          <li>
            <SVGFavorite />
            <span>Favorites</span>
          </li>
        </Link>
        <Link href="#">
          <li>
            <SVGCart />
            <span>Cart</span>
          </li>
        </Link>
        <Link href="#">
          <li>
            <SVGLogoutSmall />
            <span>Logout</span>
          </li>
        </Link>
      </ul>
    </_>
  );
}

const _ = styled.div`
  width: 9.5rem;
  height: 13.75rem;
  padding: 0.75rem 1.125rem;
  border-radius: 0.3125rem;

  position: absolute;
  top: 3.25rem;
  left: 0;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.0625rem;
  letter-spacing: 0em;
  text-align: left;

  background-color: ${Color.cardBackground};
  box-shadow: 4px 4px 63px 0px #00000026;

  .header {
    width: 100%;
    padding-bottom: 0.5625rem;
    border-bottom: 1px solid rgba(30, 30, 30, 0.2);
    margin-bottom: 0.5rem;

    display: flex;
    gap: 0.5rem;

    .avatar {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 50%;
    }

    span {
      display: flex;
      align-items: center;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      gap: 0.5rem;
      color: ${Color.stroke};
    }
  }
`;
