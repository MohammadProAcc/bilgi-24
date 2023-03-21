import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding:`${!responsive ? "30px 12px" : "30px 0"}` }}>
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