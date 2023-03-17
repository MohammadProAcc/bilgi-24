import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { LoginForm, RegisterTabs, SVGClose } from "$/ui";
import { Color } from "$/design";
import { useState } from "react";
import styled from "@emotion/styled";

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
};

export function LoginRegisterModal(props) {
  const [mode, setMode] = useState("login"); // login | register
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "rgba(30, 30, 30, 0.3)",
            backdropFilter: "blur(4.5px)",
          },
        }}
      >
        <Box sx={style}>
          <Button
            onClick={props.handleClose}
            style={{
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
      </Modal>
    </div>
  );
}

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
