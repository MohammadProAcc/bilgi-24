import { Color } from "$/design";
import { theme } from "$/utils";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { SVGClose } from "../atoms";
import { LoginForm, RegisterTabs } from "../organisms";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30.8125rem",
  bgcolor: "background.paper",
  borderRadius: "0.625rem",
  padding: "1.5625rem 2.1875rem",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  "@media(max-width: 900px)": {
    position: "static",
    transform: "none",
    width: "100%",
    borderRadius: "0",
  },
};

export function LoginRegister(props) {
  const [mode, setMode] = useState("login"); // login | register

  return (
    <_>
      <Box sx={style}>
        <Button
          onClick={props.handleClose}
          sx={{
            alignSelf: "flex-end",
            minHeight: "2rem",
            maxHeight: "2rem",
            maxWidth: "2rem",
            minWidth: "2rem",
            height: "calc(100% - 0.625rem)",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              cursor: "pointer",
            },
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <SVGClose />
        </Button>
        <Title>{mode === "login" ? "Login" : "Sign Up"}</Title>
        {mode === "login" ? <LoginForm /> : <RegisterTabs />}
        <Toggle>
          {mode === "login" ? (
            <>
              New to Our Website?{" "}
              <span onClick={() => setMode("register")}>Sign Up</span>
            </>
          ) : (
            <>
              Already Have An Account?{" "}
              <span onClick={() => setMode("login")}>Login</span>
            </>
          )}
        </Toggle>
      </Box>
    </_>
  );
}

const _ = styled.div``;

const Title = styled.div`
  color: ${Color.sub};
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1.9375rem;
  letter-spacing: 0em;
  text-align: center;
`;

const Toggle = styled.p`
  align-self: center;
  margin-top: 1.375rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.0625rem;
  letter-spacing: 0em;
  text-align: left;
  color: ${Color.strokeDark};

  span {
    font-weight: 700;
    color: ${Color.sub};
    &:hover {
      cursor: pointer;
    }
  }
`;
