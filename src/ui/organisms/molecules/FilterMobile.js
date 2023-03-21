import {
  AppBar,
  Button,
  Checkbox,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TuneIcon from "@mui/icons-material/Tune";
import { CustomSelect } from "./CustomSelect";
import { forwardRef, useState } from "react";

const namesPrice = ["$", "$"];
const names = ["gross", "gross"];
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export function FilterMobile() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const CustomFormControlLabel = styled(FormControlLabel)({
    fontSize: "12px",
    fontWeight: 400,
    color: "#1E1E1E",
  });
  const Label = styled(InputLabel)({
    fontSize: "18px",
    fontWeight: 400,
    color: "#1E1E1E",
  });
  const Input = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: "1px solid #ced4da",
      fontSize: 16,
      width: "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
    },
  }));
  return (
    <Grid container width="fit-content">
      <Button
        variant="text"
        onClick={handleClickOpen}
        startIcon={<TuneIcon sx={{ width: "15px", height: "15px" }} />}
        sx={{ fontSize: "10px" }}
      >
        Filter
      </Button>
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar sx={{ justifyContent: "flex-end" }}>
              <IconButton
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <List>
            <Grid
              id="content"
              container
              direction="column"
              gap="40px"
              padding="20px 40px 20px 40px"
              xl
            >
              <Grid
                id="checkbox"
                container
                direction="column"
                gap="10px"
                width="fit-content"
              >
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 500, color: "#1E1E1E" }}
                >
                  Real State
                </Typography>
                <FormGroup>
                  <CustomFormControlLabel
                    control={<Checkbox size="small" color="sub" />}
                    label="Residential"
                  />
                  <CustomFormControlLabel
                    control={<Checkbox size="small" color="sub" />}
                    label="Workplace"
                  />
                  <CustomFormControlLabel
                    control={<Checkbox size="small" color="sub" />}
                    label="Plot"
                  />
                  <CustomFormControlLabel
                    control={<Checkbox size="small" color="sub" />}
                    label="Building"
                  />
                  <CustomFormControlLabel
                    control={<Checkbox size="small" color="sub" />}
                    label="Tourist Facility"
                  />
                  <CustomFormControlLabel
                    control={<Checkbox size="small" color="sub" />}
                    label="Entertainment Complex"
                  />
                </FormGroup>
              </Grid>
              <Grid
                container
                sx={{
                  width: "fit-content",
                  gap: "5px",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#1E1E1E", fontSize: "14px", fontWeight: 500 }}
                >
                  Price
                </Typography>
                <CustomSelect
                  name={namesPrice}
                  sxSelect={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "none",
                    },
                  }}
                />
              </Grid>
              <Grid
                id="price"
                container
                direction="column"
                gap="18px"
                width="fit-content"
              >
                <FormControl variant="standard">
                  <Label shrink>From</Label>
                  <Input placeholder="25000$" id="price-from" />
                </FormControl>
                <FormControl variant="standard">
                  <Label shrink>To</Label>
                  <Input placeholder="25000$" id="price-to" />
                </FormControl>
              </Grid>
              <Grid
                container
                sx={{
                  width: "fit-content",
                  gap: "5px",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "#1E1E1E", fontSize: "14px", fontWeight: 500 }}
                >
                  Metrage
                </Typography>
                <CustomSelect
                  name={names}
                  sxSelect={{
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "none",
                    },
                  }}
                />
              </Grid>
              <Grid
                id="metrage"
                container
                direction="column"
                gap="18px"
                width="fit-content"
              >
                <FormControl variant="standard">
                  <Label shrink>From</Label>
                  <Input placeholder="125" id="metrage-from" />
                </FormControl>
                <FormControl variant="standard">
                  <Label shrink>To</Label>
                  <Input placeholder="185" id="metrage-to" />
                </FormControl>
              </Grid>
            </Grid>
          </List>
        </Dialog>
      </div>
    </Grid>
  );
}
