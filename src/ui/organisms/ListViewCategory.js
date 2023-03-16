import { Button, Grid, Typography } from "@mui/material";
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
import { imageCard } from "$/utils";

export function ListViewCategory() {
  const [valueTab, setValueTab] = useState(0);
  const handleChangeTab = (newValue) => {
    setValueTab(newValue);
  };
  return (
    <Grid id="main" container direction="column" gap="46px" xl={9}>
      <Grid
        id="header"
        container
        direction="row"
        justifyContent="space-between"
        paddingRight="280px"
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
          <CustomSelect />
        </Grid>
        <Button
          variant="text"
          sx={{ color: "#1E1E1E", fontSize: "16px", fontWeight: 500 }}
          endIcon={<KeyboardArrowDownIcon sx={{ color: "#1E1E1E" }} />}
        >
          Istanbul
        </Button>
        <ListViewTabs value={valueTab} onChange={handleChangeTab} />
      </Grid>
      <Grid id="content" container direction="row">
        <TabPanel value={valueTab} index={0}>
          <Grid container gap="32px" flexWrap="wrap" padding="0 113px 0 40px">
            {/* <Cate goryGridView/> */}
            {imageCard.map((item) => (
              <CarouselCards key={item.id} srcImage={item.imageAddress} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <Grid container gap="32px" flexWrap="wrap" padding="0 113px 0 40px">
            <CategoryListViewCard />
            <CategoryListViewCard />
            <CategoryListViewCard />
            <CategoryListViewCard />
          </Grid>
        </TabPanel>
      </Grid>
    </Grid>
  );
}
