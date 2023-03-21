import { imageListView } from "$/utils";
import {
  Box,
  Button,
  Divider,
  Grid,
  styled,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { EditProfileForm } from "./EditProfileForm";
import {
  CartBox,
  CategoryListViewCard,
  ChatNavbar,
  ContactBox,
  CustomTextfieldChat,
  MessageBoxBlue,
  MessageBoxWhite,
  TabPanel,
} from "./molecules";

export function Dashboard() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));

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
    <Grid
      container
      direction="row"
      sx={{ padding: `${!responsive ? "0 110px" : "0 0"}` }}
    >
      <Grid
        container
        direction="column"
        sx={{ height: "fit-content" }}
        xl={2.5}
        lg={2.5}
        md={2.5}
      >
        <Typography
          sx={{
            backgroundColor: "#C5DCFA",
            width: `${!responsive ? "fit-content" : "100%"}`,
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
            width: `${!responsive ? "fit-content" : "100%"}`,
          }}
        >
          <Tabs
            orientation={`${!responsive ? "vertical" : "horizontal"}`}
            variant={`${!responsive ? "standard" : "scrollable"}`}
            scrollButtons="auto"
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
      <Grid
        container
        justifyContent={!responsive ? "" : "center"}
        xl={9.5}
        lg={9.5}
        md={9.5}
      >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <EditProfileForm />
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
            <Grid
              container
              direction={`${!responsive ? "row" : "column"}`}
              gap="60px"
            >
              <Grid container direction="column" gap="12px" xl lg md>
                <ContactBox />
                <ContactBox />
                <ContactBox />
                <ContactBox />
                <ContactBox />
                <ContactBox />
              </Grid>
              <Grid container xl lg md>
                <Box
                  width={`${!responsive ? "582px" : "100%"}`}
                  height="auto"
                  sx={{
                    border: "4px solid rgba(30,30,30,0.1)",
                    borderRadius: "10px",
                    padding: "14px",
                  }}
                >
                  <Grid container gap="22px">
                    <ChatNavbar />
                    <Grid container justifyContent="flex-end">
                      <MessageBoxBlue />
                    </Grid>
                    <Grid container justifyContent="flex-start">
                      <MessageBoxWhite />
                    </Grid>
                    <Grid container justifyContent="flex-end">
                      <MessageBoxBlue />
                    </Grid>
                    <Grid container justifyContent="flex-start">
                      <MessageBoxWhite />
                    </Grid>
                    <Grid container justifyContent="flex-end">
                      <MessageBoxBlue />
                    </Grid>
                    <Grid container justifyContent="flex-start">
                      <MessageBoxWhite />
                    </Grid>
                    <CustomTextfieldChat />
                  </Grid>
                </Box>
              </Grid>
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
              sx={{
                height: "530px",
                justifyContent: "space-between",
              }}
            >
              <Grid
                container
                direction="column"
                gap="25px"
                padding="0 2rem"
                sx={{ width: "100%" }}
              >
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
