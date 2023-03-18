import styled from "@emotion/styled";
import { SelectInputGroup } from "./molecules";

export function CreatePostAdditionalInfoStep() {
  return (
    <_>
      <div className="inner">
        <SelectInputGroup label="Meterage" items={["95 - 135"]} />
        <SelectInputGroup label="Number Of Rooms" items={["5-7"]} />
        <SelectInputGroup label="Floor Location" items={["3"]} />
        <SelectInputGroup label="Number Of Bathrooms" items={["3"]} />
        <SelectInputGroup label="Building Age" items={["5 - 10"]} />
        <SelectInputGroup label="Heating" items={["Natural Gas"]} />
      </div>
    </_>
  );
}

const _ = styled.div`
  .inner {
    max-width: 62.5rem;
    margin: 3.125rem auto 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 3.125rem;
    row-gap: 2.5rem;

    > * {
      flex: 20%;
    }
  }

  .MuiFormControl-root {
    width: 300px;
    .MuiSelect-select {
      width: 100%;
    }
  }
`;
