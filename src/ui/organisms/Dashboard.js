import { imageListView } from "$/utils";
import {
  Box,
  Button,
  Grid,
  styled,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  CartBox,
  CategoryListViewCard,
  TabPanel,
} from "./molecules";

export function Dashboard() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTab = styled(Tab)({
    fontSize: "16px",
    fontWeight: 700,
  });
  return (
    <Grid container direction="row" sx={{ padding: "0 110px" }}>
      <Grid
        container
        direction="column"
        sx={{ height: "fit-content" }}
        xl={4}
        lg={4}
        md={4}
      >
        <Typography
          sx={{
            backgroundColor: "#C5DCFA",
            width: "fit-content",
            padding: "12px 60px 12px 24px",
            fontSize: "16px",
            fontWeight: 700,
            color: "#0F56B3",
            borderRadius: " 0px 10px 10px 0px",
          }}
        >
          Morteza Shirinzadeh
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "fit-content",
            width: "fit-content",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="standard"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderLeft: 1,
              borderColor: "divider",
              "& .MuiTabs-indicator": {
                left: 0,
              },
            }}
          >
            <CustomTab label="Profile" />
            <CustomTab label="My Ads" />
            <CustomTab label="Messages" />
            <CustomTab label="Favorites" />
            <CustomTab label="Cart" />
            <CustomTab label="Logout" />
          </Tabs>
        </Box>
      </Grid>
      <Grid container xl={8} lg={8} md={8}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container direction="column" gap="32px">
              {imageListView.map((item) => (
                <CategoryListViewCard
                  key={item.id}
                  srcImageLarge={item.imageLarge}
                  srcImageSmall={item.imageSmall}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container direction="row">
              <Grid container></Grid>
              <Grid container></Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container direction="column" gap="32px">
              {imageListView.map((item) => (
                <CategoryListViewCard
                  key={item.id}
                  srcImageLarge={item.imageLarge}
                  srcImageSmall={item.imageSmall}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid
              container
              direction="column"
              sx={{ height: "530px", justifyContent: "space-between" }}
            >
              <Grid container direction="column" gap="25px">
                <CartBox />
                <CartBox />
              </Grid>
              <Grid container direction="column" alignItems="center" gap="16px">
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#1E1E1E" }}
                >
                  Total Price: 30,000$
                </Typography>
                <Button
                  variant="contained"
                  color="sub"
                  size="small"
                  sx={{
                    width: "172px",
                    height: "36px",
                    color: "#011F28",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Grid>
  );
}
