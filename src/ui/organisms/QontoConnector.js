import { Color } from "$/design";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
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

export const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
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

export function QontoStepIcon(props) {
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

