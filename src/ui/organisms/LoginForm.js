import { Color } from "$/design";
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { CheckboxInput } from "../atoms";

export function LoginForm() {
  return (
    <_>
      <form>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <TextField
              id="email"
              placeholder="test@company.com"
              style={{
                width: "100%",
              }}
              sx={{
                height: "2.5rem",
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <TextField
              id="password"
              placeholder="123456!@Aa"
              style={{
                width: "100%",
              }}
              sx={{
                height: "2.5rem",
              }}
            />
          </div>
        </div>
        <div className="footer">
          <CheckboxInput label="Remember Me" />
          <Link href="#">Forget Password</Link>
        </div>
        <Link href="/profile" className="submit">
          <Button className="submit-button" color="sub" variant="contained">
            Login
          </Button>
        </Link>
      </form>
    </_>
  );
}

const _ = styled.div`
  form {
    margin-top: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .form-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2.25rem;
    }

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.6875rem;
    }

    label {
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: ${Color.strokeDark};
    }

    #email {
      background-image: url("/images/email.svg");
    }

    #password {
      background-image: url("/images/lock.svg");
    }

    #email,
    #password {
      padding-right: 2rem;

      background-repeat: no-repeat;
      background-position: calc(100% - 0.9375rem) center;
    }

    .MuiInputBase-root {
      height: 3rem;
    }

    .footer {
      width: 100%;
      margin-top: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 0.9375rem;
        letter-spacing: 0em;
        text-align: left;
        color: ${Color.sub};
      }

      .MuiTypography-root {
        font-size: 0.75rem;
      }
    }

    a.submit {
      width: 100%;
      margin-top: 2.875rem;
      display: flex;
      justify-content: center;

      .submit-button {
        align-self: center;
        width: 9.5rem;
        height: 2.5rem;

        color: ${Color.strokeDark};
      }
    }
  }
`;
