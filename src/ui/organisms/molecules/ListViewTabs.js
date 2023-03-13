import { useState } from "react";
import { Box, Grid, styled, Tab, Tabs, Typography } from "@mui/material";
import { TabPanel } from "./atoms";
import {BsList} from "react-icons/bs";
import {GrAppsRounded} from "react-icons/gr";

export function ListViewTabs(props) {
  const CustomTab = styled(Tab)({
    marginRight: "10px",

    "&:hover": {
      backgroundColor: "#00A693",
      borderRadius: "5px",
    },
    "&.Mui-selected": {
      backgroundColor: "#00A693",
      borderRadius: "5px",
      border: "0",
    },
    "&.Mui-focusVisible": {
      border: "0",
    },
  });

  // const [valueTab, setValueTab] = useState(0);
  // const handleChangeTab = (newValue) => {
  //   setValueTab(newValue);
  // };
  return (
    <Tabs
    value={props.value}
    onChange={props.onChange}
    centered
    indicatorColor={""}
  >
    <CustomTab
      icon={
        <GrAppsRounded
          sx={{
            color: "black",
            width: "100px",
            height: "100px",
          }}
        />
      }
    />
    <CustomTab
      icon={
        <BsList
          sx={{ color: "black", width: "100px", height: "100px" }}
        />
      }
    />
  </Tabs>
    // <Grid
    //   container
    //   direction="column"
    //   gap="40px"
    // >
    //   <Grid>
    //     <Box sx={{}}>
        
    //     </Box>
    //   </Grid>
    //   {/* <TabPanel value={valueTab} index={0}>
    //     <Grid container>
    //       <Typography variant="h5">Grid</Typography>
    //     </Grid>
    //   </TabPanel>
    //   <TabPanel value={valueTab} index={1}>
    //     <Grid container flexWrap="wrap" justifyContent="space-between">
    //       <Typography variant="h5">List</Typography>
    //     </Grid>
    //   </TabPanel> */}
    // </Grid>
  );
}
