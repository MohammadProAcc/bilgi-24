import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CreatePostContext } from "$/contexts";
import { QontoConnector, QontoStepIcon } from "./QontoConnector";

const steps = [
  "Basic Info",
  "Title",
  "Additional Info",
  "Options",
  "Description",
];

export function CreatePostTimeLineVertical() {
  const { step } = React.useContext(CreatePostContext);

  return (
    <Box
      sx={{
        marginTop: "2rem",
        maxWidth: 400,
        "& .MuiStepLabel-root": {
          paddingLeft: "0.4375rem",
          paddingTop: 0,
          paddingBottom: 0,
        },
      }}
    >
      <Stepper
        activeStep={step}
        orientation="vertical"
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step}>
            <StepLabel StepIconComponent={QontoStepIcon}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
