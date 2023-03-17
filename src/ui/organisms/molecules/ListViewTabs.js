import { Box, styled, Tab, Tabs } from "@mui/material";
import { BsList } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";

export function ListViewTabs(props) {
  const CustomTab = styled(Tab)({
    marginRight: "10px",
    padding: "8px",
    minWidth: "30px",
    minHeight: "30px",
    "&:hover": {
      backgroundColor: "#F5B61A",
      borderRadius: "5px",
    },
    "&.Mui-selected": {
      backgroundColor: "#F5B61A",
      borderRadius: "5px",
      border: "0",
    },
    "&.Mui-focusVisible": {
      // border: "10px",
    },
  });
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Box>
        <Tabs
          value={props.value}
          onChange={props.onChange}
          textColor="inherit"
          variant="fullWidth"
          indicatorColor={""}
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "none" } }}
        >
          <CustomTab
            icon={
              <GrAppsRounded
                style={{ width: "20px", height: "20px", color: "#1E1E1E" }}
              />
            }
            {...a11yProps(0)}
          />
          <CustomTab
            icon={
              <BsList
                style={{
                  width: "24px",
                  height: "22px",
                }}
              />
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
