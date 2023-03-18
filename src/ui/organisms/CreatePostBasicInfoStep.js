import styled from "@emotion/styled";
import { BreadCrumbs, SelectInputGroup } from "$/ui";
import { useForm } from "react-hook-form";

export function CreatePostBasicInfoStep() {
  const form = useForm({
    defaultValues: {
      mainCategory: "Real State",
      subCategory: "Residential",
      type: "For Rent",
      subType: "Apartment",
    },
  });
  return (
    <_>
      <div className="inner">
        <SelectInputGroup
          label="Main Category"
          items={["Real State", "Online"]}
          callback={(value) => form.setValue("mainCategory", value)}
        />
        <SelectInputGroup
          label="Sub Category"
          items={["Residential"]}
          callback={(value) => form.setValue("subCategory", value)}
        />
        <SelectInputGroup
          label="Type"
          items={["For Rent"]}
          callback={(value) => form.setValue("type", value)}
        />
        <SelectInputGroup
          label="Sub - Type"
          items={["Apartment"]}
          callback={(value) => form.setValue("subType", value)}
        />
      </div>
      <div className="divider" />
      <BreadCrumbs
        items={[
          form.watch("mainCategory"),
          form.watch("subCategory"),
          form.watch("type"),
          form.watch("subType"),
        ]}
      />
    </_>
  );
}

const _ = styled.div`
  max-width: 63.125rem;
  margin: 0 auto;
  width: 100%;
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

  .divider {
    padding: 2.5rem 0;
  }

  .MuiFormControl-root {
    width: 300px;
    .MuiSelect-select {
      width: 100%;
    }
  }
`;
