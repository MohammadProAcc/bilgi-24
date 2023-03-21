import { BreakPoint } from "$/design";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { HeaderAddPostButton, HeaderLoginRegisterButton } from "../atoms";
import { HeaderDrawer, LoginRegisterModal } from "../organisms";
import { HeaderProfileButton } from "./HeaderProfileButton";
import { LangSelection } from "./LangSelection";
import Fab from "@mui/material/Fab";
import { Menu } from "@mui/icons-material";

export function HeaderToolbar(props) {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  const isMd = useMediaQuery(BreakPoint.device.min.md);

  return (
    <_>
      {isMd && <LangSelection />}

      <div className="inner">
        {isMd ? (
          <>
            {props.authorized ? (
              <HeaderProfileButton />
            ) : (
              <HeaderLoginRegisterButton
                onClick={() => setShowLoginRegisterModal(true)}
              />
            )}

            <HeaderAddPostButton onClick={() => props.setMode("addPost")} />
          </>
        ) : (
          <Fab color="sub" size="small" onClick={() => setShowMenuDrawer(true)}>
            <Menu color="primary" />
          </Fab>
        )}
      </div>

      {/* Drawer */}
      <HeaderDrawer
        anchor="right"
        open={showMenuDrawer}
        onClose={() => setShowMenuDrawer(false)}
      />

      {/* Modal */}
      <LoginRegisterModal
        open={showLoginRegisterModal}
        handleClose={() => setShowLoginRegisterModal(false)}
      />
    </_>
  );
}

const _ = styled.div`
  display: flex;

  .inner {
    display: flex;
    gap: 0.9375rem;
    padding-left: 2.75rem;
  }

  @media ${BreakPoint.device.min.md} and (max-width: 1360px) {
    .inner {
      gap: 0.5rem;
    }
  }
`;
