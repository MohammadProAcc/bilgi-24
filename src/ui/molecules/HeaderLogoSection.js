import { BreakPoint } from "$/design";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { SVGLogo } from "../atoms";
import { SearchInput } from "../layouts";

export function HeaderLogoSection(props) {
  const isMd = useMediaQuery(BreakPoint.device.min.md);

  return (
    <_>
      <Link href="/" title="logo" className="logo">
        <SVGLogo />
      </Link>
      <div className="logo-divider" />
      {props.searchInput && isMd && <SearchInput />}
    </_>
  );
}

const _ = styled.div`
  display: flex;
  align-items: center;
`;
