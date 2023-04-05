import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputBase,
  InputLabel,
  styled as styles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomSelect, FilterMobile } from "./molecules";

const namesPrice = ["$", "$"];
const names = ["gross", "gross"];

export function SideBar() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <>
      {!responsive ? (
        <Grid id="main" container direction="row" xl={2} lg={2.5} md={3}>
          {/* Could Become an atom */}
          <Grid
            id="content"
            container
            direction="column"
            gap="40px"
            padding="107px 0 0 0"
            xl
          >
            <Grid
              id="checkbox"
              container
              direction="column"
              gap="10px"
              width="fit-content"
            >
              <Typography sx={inlineStyles.typoGraphyStyles.base}>
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
              <Typography sx={inlineStyles.typoGraphyStyles.light}>
                Price
              </Typography>
              <CustomSelect
                name={namesPrice}
                sxSelect={sx.customSelect.sxSelect}
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
              // Should go to inlineStyles
              sx={{
                width: "fit-content",
                gap: "5px",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={inlineStyles.typoGraphyStyles.light}>
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
          <Divider sx={{ borderWidth: "1px", marginTop: "107px" }} xl />
        </Grid>
      ) : (
        <></>
        // <FilterMobile/>
      )}
    </>
  );
}

const CustomFormControlLabel = styles(FormControlLabel)({
  fontSize: "12px",
  fontWeight: 400,
  color: "#1E1E1E",
});

const Label = styles(InputLabel)({
  fontSize: "18px",
  fontWeight: 400,
  color: "#1E1E1E",
});

const Input = styles(InputBase)(({ theme }) => ({
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

const inlineStyles = {
  typoGraphyStyles: {
    base: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#1E1E1E",
    },
    light: {
      color: "#1E1E1E",
      fontSize: "14px",
      fontWeight: 500,
    },
  },
};

const sx = {
  customSelect: {
    sxSelect: {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "none",
      },
    },
  },
};
