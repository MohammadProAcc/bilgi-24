import { CreatePostContext } from "$/contexts";
import { Color, Zindex } from "$/design";
import {
  CreatePostAdditionalInfoStep,
  CreatePostBasicInfoStep,
  CreatePostDescriptionStep,
  CreatePostOptionsStep,
  CreatePostStepNavigation,
  CreatePostTimeLine,
  CreatePostTitleStep,
  Justifier,
  Layout,
  SVGEllipse3,
  SVGEllipse4,
} from "$/ui";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

export function CreatePostPage() {
  const [step, setStep] = useState(0);

  return (
    <Layout>
      <CreatePostContext.Provider value={{ step, setStep }}>
        <_>
          <Justifier style={{ position: "relative", zIndex: Zindex.notEllipse }}>
            <h1>Create Post</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque.
            </p>
            <CreatePostTimeLine />
            {step === 0 ? (
              <CreatePostBasicInfoStep />
            ) : step === 1 ? (
              <CreatePostTitleStep />
            ) : step === 2 ? (
              <CreatePostAdditionalInfoStep />
            ) : step === 3 ? (
              <CreatePostOptionsStep />
            ) : (
              <CreatePostDescriptionStep />
            )}
            <CreatePostStepNavigation />
          </Justifier>
          <SVGEllipse3
            Style={css`
              position: absolute;
              top: 22.5rem;
              left: 0;
              z-index: ${Zindex.ellipseBackground};
            `}
          />
        </_>
      </CreatePostContext.Provider>
    </Layout>
  );
}

const _ = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 3.625rem;

  background-image: url("/images/Ellipse_4.svg");
  background-repeat: no-repeat;
  background-position: top right;

  h1 {
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 1.9375rem;
    letter-spacing: 0em;
    text-align: center;
    color: ${Color.sub};
  }

  .description {
    margin-top: 2.125rem;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.6875rem;
    letter-spacing: 0.02em;
    text-align: justified;
  }
`;
