import { Button, Grid, MenuItem, Typography, useTheme } from "@mui/material";
import {
  CarouselCards,
  CustomSelect,
  CategoryListViewCard,
  ListViewTabs,
  TabPanel,
  CategoryGridView,
} from "$/ui/organisms/molecules";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { imageCard, imageListView } from "$/utils";
import SwipeableViews from "react-swipeable-views";

const names = ["Newest", "oldest"];
const city = ["Istanbul", "Ankara", "Konya"];
export function ListViewCategory() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [age, setAge] = useState("");
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  function handleChange(event) {
    setAge(event.target.value);
  }
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Grid
      id="main"
      container
      direction="column"
      gap="46px"
      xl={8}
      lg={9}
      md={8}
    >
      <Grid
        id="header"
        container
        sx={{
          direction: "row",
          justifyContent: "space-between",
          paddingRight: { xl: "180px", lg: "0", md: "0" },
        }}
      >
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
            sx={{ color: "#1E1E1E", fontSize: "12px", fontWeight: 500 }}
          >
            Sort By :
          </Typography>
          <CustomSelect name={names} />
        </Grid>
        <CustomSelect
          name={city}
          icon={() => <KeyboardArrowDownIcon />}
          sxSelect={{
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
        <ListViewTabs value={value} onChange={handleChangeTab} />
      </Grid>
      <Grid id="content" container direction="row">
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <Grid
              container
              sx={{ gap: "32px", flexWrap: "wrap", padding: {xl:"0 113px 0 40px",lg:"0 0 0 40px",md:"0"} }}
            >
              {imageCard.map((item) => (
                <CarouselCards
                  key={item.id}
                  srcImage={item.imageAddress}
                  isShop={item.isShop}
                />
              ))}
              {/* <Cate goryGridView /> */}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container gap="32px" flexWrap="wrap" padding="0 113px 0 40px">
              {imageListView.map((item) => (
                <CategoryListViewCard
                  key={item.id}
                  srcImageLarge={item.imageLarge}
                  srcImageSmall={item.imageSmall}
                />
              ))}
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </Grid>
    </Grid>
  );
}
