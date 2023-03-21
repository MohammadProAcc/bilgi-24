import { BreakPoint } from "$/design";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ShadowedImage, SVGCamera } from "../atoms";
import { EditProfileFormButtons } from "./EditProfileFormButtons";
import { InputGroup, SelectInputGroup } from "./molecules";

export function EditProfileForm() {
  return (
    <_>
      <div className="header">
        <ShadowedImage
          src="/images/profile.png"
          Style={css`
            width: 10.3125rem;
            height: 10.3125rem;
            border-radius: 0.625rem;
          `}
          imageStyle={css`
            width: 10.3125rem;
            height: 10.3125rem;
            border-radius: 0.625rem;
          `}
        >
          <SVGCamera
            Style={css`
              position: absolute;
              top: 0.6875rem;
              right: 0.6875rem;
            `}
          />
        </ShadowedImage>

        <div className="edit-info desktop">
          <div className="double-input">
            <InputGroup
              label="Name"
              inputProps={{ value: "Morteza Shirinzadeh", color: "sub" }}
              icon="/images/edit-sub.svg"
            />

            <InputGroup
              label="Surname"
              inputProps={{ value: "Jacktr58", color: "sub" }}
              icon="/images/edit-sub.svg"
            />
          </div>
          <div className="double-input">
            <InputGroup
              label="Phone Number"
              inputProps={{
                value: "+98 921 008 5374",
                color: "sub",
                type: "tel",
              }}
              icon="/images/edit-sub.svg"
            />

            <InputGroup
              label="Fixed Number"
              inputProps={{
                value: "+98 921 008 5374",
                color: "sub",
                type: "tel",
              }}
              icon="/images/edit-sub.svg"
            />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="edit-info mobile">
          <div className="double-input column">
            <InputGroup
              label="Name"
              inputProps={{ value: "Morteza Shirinzadeh", color: "sub" }}
              icon="/images/edit-sub.svg"
            />

            <InputGroup
              label="Surname"
              inputProps={{ value: "Jacktr58", color: "sub" }}
              icon="/images/edit-sub.svg"
            />
          </div>
          <div className="double-input column">
            <InputGroup
              label="Phone Number"
              inputProps={{
                value: "+98 921 008 5374",
                color: "sub",
                type: "tel",
              }}
              icon="/images/edit-sub.svg"
            />

            <InputGroup
              label="Fixed Number"
              inputProps={{
                value: "+98 921 008 5374",
                color: "sub",
                type: "tel",
              }}
              icon="/images/edit-sub.svg"
            />
          </div>
        </div>
        <div className="input-bar">
          <InputGroup
            Style={css`
              min-width: 21.25rem;
              max-width: 21.25rem;
              .form-group-input {
                input {
                  padding-right: 0.875rem;
                }
              }

              @media ${BreakPoint.device.max.md} {
                max-width: 100%;
              }
            `}
            label="Email Address"
            inputProps={{
              value: "mortezashirinzadehbusiness@gmail.com",
              color: "sub",
              type: "email",
              style: { fontSize: "0.875rem", fontWeight: "300", padding: 0 },
            }}
            icon=""
          />
          <SelectInputGroup label="Country" items={["Turkey"]} />
          <SelectInputGroup label="City" items={["Istanbul"]} />
        </div>
      </div>

      <EditProfileFormButtons />
    </_>
  );
}

const _ = styled.div`
  width: 100%;

  .header {
    width: 100%;
    display: flex;
    gap: 1.5rem;

    .edit-info {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.75rem;

      .double-input {
        width: 100%;
        display: flex;
        gap: 1.375rem;
      }
    }
  }

  .body {
    width: 100%;
    display: flex;
    flex-direction: column;

    .input-bar {
      margin-top: 1.6875rem;
      display: flex;
      gap: 1.6875rem;
    }
  }

  @media ${BreakPoint.device.max.md} {
    .edit-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .body {
      margin-top: 1rem;

      .input-bar {
        flex-direction: column;
      }
    }

    .desktop {
      display: none !important;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media ${BreakPoint.device.min.md} {
    .mobile {
      display: none !important;
    }
  }
`;
