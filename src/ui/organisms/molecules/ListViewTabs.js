import { Box, styled, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import { BsList } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";

export function ListViewTabs(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const CustomTab = styled(Tab)({
    marginRight: `${!responsive ? "10px" : "5px"}`,
    padding: `${!responsive ? "8px" : "4px"}`,
    minWidth: `${!responsive ? "30px" : "15px"}`,
    minHeight: `${!responsive ? "30px" : "15px"}`,
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
          sx={{
            minHeight: 0,
            "& .MuiTabs-indicator": { backgroundColor: "none" },
          }}
        >
          <CustomTab
            icon={
              <GrAppsRounded
                style={{
                  width: `${!responsive ? "20px" : "12px"}`,
                  height: `${!responsive ? "20px" : "12px"}`,
                  color: "#1E1E1E",
                }}
              />
            }
            {...a11yProps(0)}
          />
          <CustomTab
            icon={
              <BsList
                style={{
                  width: `${!responsive ? "24px" : "16px"}`,
                  height: `${!responsive ? "22px" : "14px"}`,
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
