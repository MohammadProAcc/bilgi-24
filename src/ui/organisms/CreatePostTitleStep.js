import styled from "@emotion/styled";
import { InputGroup, LocationInput, SelectInputGroup } from "$/ui";
import { BreakPoint } from "$/design";

export function CreatePostTitleStep() {
  return (
    <_>
      <InputGroup
        label="Title"
        inputProps={{ placeholder: "Say All The Things You Need..." }}
      />

      <div className="double-input">
        <InputGroup label="Mortgage" inputProps={{ placeholder: "25000$" }} />
        <InputGroup label="Rent" inputProps={{ placeholder: "1800$" }} />
      </div>

      <div className="double-input">
        <InputGroup
          label="Tel"
          inputProps={{ placeholder: "+98 922 056 2339" }}
        />
        <SelectInputGroup label="Time" items={["15 day"]} />
      </div>

      <div className="double-input">
        <SelectInputGroup label="Country" items={["Turkey"]} />
        <SelectInputGroup label="City" items={["Istanbul"]} />
      </div>

      <LocationInput />
    </_>
  );
}

const _ = styled.div`
  width: 37.8125rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;

  .double-input {
    display: flex;
    column-gap: 3rem;

    > * {
      width: 100%;
    }
  }

  @media ${BreakPoint.device.max.md} {
    width: 100%;
    margin-top: 2rem;

    gap: 1.5rem;

    .double-input {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
