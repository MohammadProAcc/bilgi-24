import { Button, Grid, Typography } from "@mui/material";
import { CustomSelect } from "$/ui/organisms/molecules";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function ListViewCategory() {

  return (
    <Grid id="main" container direction="column">
      <Grid id="header" container direction="row">
        <Grid container
          sx={{
            gap: "5px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color:"#1E1E1E",fontSize:"12px",fontWeight:500 }}>
            Sort By :
          </Typography>
          <CustomSelect />
        </Grid>
        <Button variant="text" sx={{color:"#1E1E1E",fontSize:"16px",fontWeight:500}} endIcon={<KeyboardArrowDownIcon sx={{color:"#1E1E1E"}}/>}>Istanbul</Button>
      </Grid>
      <Grid id="content" container direction="row"></Grid>
    </Grid>
  );
}
