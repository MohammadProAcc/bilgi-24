import { CreatePostContext } from "$/contexts";
import { Color } from "$/design";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useContext } from "react";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 5px)",
    right: "calc(50% + 5px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Color.sub,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: Color.sub,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : "rgb(30,30,30,0.3)",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : Color.deactive,
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: Color.sub,
  }),
  "& .QontoStepIcon-completedIcon": {
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: Color.sub,
  },
  "& .QontoStepIcon-circle": {
    width: 11,
    height: 11,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-completedIcon" />
      ) : (
        // <Check className="QontoStepIcon-completedIcon" />
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = [
  "Basic Info",
  "Title",
  "Additional Info",
  "Options",
  "Description",
];

export function CreatePostTimeLine() {
  const { step } = useContext(CreatePostContext);

  return (
    <_>
      <Stack
        sx={{
          alignSelf: "center",
          maxWidth: "44.6875rem",
          marginTop: "2.25rem",
          marginBottom: "2.25rem",
          width: "100%",
        }}
        spacing={4}
      >
        <Stepper
          alternativeLabel
          activeStep={step}
          connector={<QontoConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </_>
  );
}

const _ = styled(Box)`
  padding-top: 2rem;

  display: flex;
  justify-content: center;

  .MuiStep-root {
    position: relative;
  }
  .MuiStepLabel-labelContainer {
    margin: 0;
    position: absolute;
    top: -2.5rem;
    left: 0;
  }
`;
