import { Color } from "$/design";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";
import { CheckboxInput } from "../atoms";
import { InputGroup } from "./molecules";

export function RegularRegisterForm() {
  return (
    <_>
      <div className="inner">
        <div className="double-input">
          <InputGroup
            label="Your Name"
            icon="/images/edit-profile.svg"
            inputProps={{
              placeholder: "Jack Brown",
            }}
          />
          <InputGroup
            label="Your Surname"
            icon="/images/edit-profile.svg"
            inputProps={{
              placeholder: "Jacky3254",
            }}
          />
        </div>

        <InputGroup
          label="Email Address"
          icon="/images/email.svg"
          inputProps={{
            placeholder: "test@company.com",
            type: "email",
          }}
        />

        <InputGroup
          label="Password"
          icon="/images/lock.svg"
          inputProps={{
            placeholder: "123456!@Aa",
            type: "password",
          }}
        />
      </div>

      <div className="divider" />

      <CheckboxInput
        label={
          <>
            Accept Bigli24{" "}
            <Link href="#" target="_blank">
              Privacy Policy
            </Link>
          </>
        }
      />

      <Button
        color="sub"
        variant="contained"
        style={{ minWidth: "9.5rem", maxWidth: "9.5rem" }}
      >
        Sign Up
      </Button>
    </_>
  );
}

const _ = styled.form`
  display: flex;
  flex-direction: column;

  a {
    font-weight: 500;
    color: ${Color.sub};

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-top: 2rem;
    align-self: center;
  }

  .inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .double-input {
    width: 100%;
    display: flex;
    gap: 2.25rem;
  }

  .divider {
    margin-top: 0.8125rem;
  }
`;
