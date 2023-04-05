import {
  CarouselCards,
  CategoryListViewCard,
  CustomSelect,
  FilterMobile,
  ListViewTabs,
  TabPanel,
} from "$/ui/organisms/molecules";
import { imageCard, imageListView } from "$/utils";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const names = ["Newest", "oldest"];
const city = ["Istanbul", "Ankara", "Konya"];
export function ListViewCategory() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));
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
    <$
      id="main"
      container
      direction="column"
      gap="46px"
      xl={8}
      lg={9}
      md={8}
      sm={12}
      xs={12}
    >
      <Grid
        id="header"
        container
        sx={{
          direction: "row",
          justifyContent: "space-between",
          paddingRight: { xl: "180px", lg: "0", md: "0" },
          alignItems: `${!responsive ? "" : "center"}`,
        }}
      >
        {responsive ? <FilterMobile /> : <></>}
        <Grid
          container
          sx={{
            width: "fit-content",
            gap: "5px",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: `${!responsive ? 0 : 0}`,
          }}
        >
          <Typography
            sx={{
              color: "#1E1E1E",
              fontSize: `${!responsive ? "12px" : "9px"}`,
              fontWeight: 500,
            }}
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
              sx={{
                gap: `${!responsive ? "32px" : "18px"}`,
                flexWrap: "wrap",
                padding: { xl: "0 113px 0 40px", lg: "0 0 0 40px", md: "0" },
                justifyContent: `${!responsive ? "" : "center"}`,
              }}
            >
              {imageCard.map((item) => (
                <CarouselCards
                  key={item.id}
                  srcImage={item.imageAddress}
                  isShop={item.isShop}
                />
              ))}
              {/* <CategoryGridView /> */}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid
              container
              gap="32px"
              flexWrap="wrap"
              padding={!responsive ? "0 113px 0 40px" : "0"}
            >
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
    </$>
  );
}

const $ = styled(Grid)`
  /* css-in-js goes here */
`;
