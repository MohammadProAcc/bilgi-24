import styled from "@emotion/styled";
import { Drawer, Fab } from "@mui/material";
import { Close } from "@mui/icons-material";
import { HeaderAddPostButton, HeaderLoginRegisterButton } from "../atoms";
import { useState } from "react";
import { LangSelection, LoginRegister } from "../molecules";
import { SearchInput } from "../layouts";
import { HeaderCreatePostExtension } from "./molecules/HeaderCreatePostExtension";

export function HeaderDrawer(props) {
  const [activeSection, setActiveSection] = useState(""); // login | addPost

  return (
    <Drawer
      {...props}
      sx={{
        overflowrY: "scroll",
        "& .MuiDrawer-paper": {
          width: "100vw",
          height: "100vh",
        },
      }}
    >
      <_>
        <div className="header">
          <img className="logo" src="/images/logo.svg" />

          <Fab size="small" color="sub" onClick={props.onClose}>
            <Close color="primary" />
          </Fab>
        </div>

        <div className="body">
          <LangSelection />

          <SearchInput />

          <HeaderLoginRegisterButton
            onClick={() => setActiveSection("login")}
          />

          <HeaderAddPostButton onClick={() => setActiveSection("addPost")} />

          {activeSection === "login" ? (
            <LoginRegister />
          ) : (
            activeSection === "addPost" && <HeaderCreatePostExtension />
          )}
        </div>
      </_>
    </Drawer>
  );
}

const _ = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  overflow-y: scroll;

  background: linear-gradient(108.45deg, #011f28 0%, #0d4e62 99.35%);

  .header {
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem;

    display: flex;
    justify-content: space-between;
  }

  .body {
    width: 100%;
    height: calc(100% - 3.75rem);
    padding: 1rem 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .divider {
      height: 4rem;
    }
  }
`;
