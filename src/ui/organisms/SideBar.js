import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputBase,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import { CustomSelect } from "./molecules";

export function SideBar() {
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
    <>
      <Grid id="main" container direction="row" xl={2.5}>
        <Grid
          id="content"
          container
          direction="column"
          gap="40px"
          padding="107px 0 0 113px"
          xl
        >
          <Grid id="checkbox" container direction="column" gap="10px">
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#1E1E1E" }}
            >
              Real State
            </Typography>
            <FormGroup>
              <CustomFormControlLabel
                control={<Checkbox size="small" />}
                label="Residential"
              />
              <CustomFormControlLabel
                control={<Checkbox size="small" />}
                label="Workplace"
              />
              <CustomFormControlLabel
                control={<Checkbox size="small" />}
                label="Plot"
              />
              <CustomFormControlLabel
                control={<Checkbox size="small" />}
                label="Building"
              />
              <CustomFormControlLabel
                control={<Checkbox size="small" />}
                label="Tourist Facility"
              />
              <CustomFormControlLabel
                control={<Checkbox size="small" />}
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
            <CustomSelect />
          </Grid>
          <Grid id="price" container direction="column" gap="18px">
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
            <CustomSelect />
          </Grid>
          <Grid id="metrage" container direction="column" gap="18px">
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
        <Divider sx={{ borderWidth: "1px",marginTop:"107px" }} xl/>
      </Grid>
    </>
  );
}
