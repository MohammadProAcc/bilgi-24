import { Box, Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/system";
import { TabsOptions } from "$/ui/organisms/molecules/atoms";

export function TabsBoxPostSingle() {
  const theme = useTheme();
  const responsive=useMediaQuery(theme.breakpoints.between("xs","md"));
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const CustomTab = styled(Tab)({
    color: "#1E1E1E",
    fontWeight: 500,
    fontSize: "16px",
    textTransform: "none",
  });
  return (
    <Grid
      id="main"
      container
      sx={{
        width: "100%",
        minHeight: "231px",
        boxShadow: "6px 7px 28px rgba(0, 0, 0, 0.07)",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ bgcolor: "white", width:`${!responsive ? "100%" : "100%"}`,height:`${!responsive ? "" : "231px"}`}}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant={`${!responsive ? "fullWidth" : "scrollable"}`}
            // scrollButtons="auto"
            sx={{ "& .MuiTabs-indicator": { backgroundColor: "#F5B61A" } }}
          >
            <CustomTab label="Front Yard" {...a11yProps(0)} />
            <CustomTab label="Back Yard" {...a11yProps(1)} />
            <CustomTab label="Inner House" {...a11yProps(2)} />
            <CustomTab label="Roof" {...a11yProps(3)} />
            <CustomTab label="Inner House" {...a11yProps(4)} />
            <CustomTab label="Roof" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid container direction="row">
              <Grid container direction="column" xl>
                <TabsOptions text="Lift (Elevator)" disable="true" />
                <TabsOptions text="Labi" />
                <TabsOptions text="Lift (Elevator)" disable="true" />
              </Grid>
              <Grid container direction="column" xl>
                <TabsOptions text="Parking" />
                <TabsOptions text="Balcony" />
                <TabsOptions text="Parking" />
              </Grid>
              <Grid container direction="column" xl>
                <TabsOptions text="Swimming Pool" disable="true" />
                <TabsOptions text="Emergency Exit" disable="true" />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Fore
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5} dir={theme.direction}>
            Item Six
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Grid>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "30px 12px" }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
