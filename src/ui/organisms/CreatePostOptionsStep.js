import { BreakPoint } from "$/design";
import { CheckboxInput, SegmentedInput } from "$/ui";
import styled from "@emotion/styled";

export function CreatePostOptionsStep() {
  return (
    <_>
      <SegmentedInput
        items={["Front Yard", "Back Yard", "Inner House", "Roof"]}
      />

      <div className="checkboxes">
        <div className="double-input">
          <CheckboxInput label="Lift (Elevator)" />
          <CheckboxInput label="Parking" />
        </div>
        <div className="double-input">
          <CheckboxInput label="Labi" />
          <CheckboxInput label="Balcony" />
        </div>
        <div className="double-input">
          <CheckboxInput label="Emergency Exit" />
          <CheckboxInput label="Swimming Pool" />
        </div>
      </div>
    </_>
  );
}

const _ = styled.div`
  width: 33rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.25rem;

  .checkboxes {
    width: 90%;
    margin-bottom: 2rem;
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 2.75rem;

    /* FIXME: */
    transform: translateX(3.125rem);

    .double-input {
      width: 100%;

      display: flex;

      > * {
        flex: 1;
      }
    }
  }

  @media ${BreakPoint.device.max.md} {
    width: 100%;
    margin-top: 2rem;

    .checkboxes {
      width: 100%;
      transform: none;
    }
  }
`;