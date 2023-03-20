import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { BreakPoint, Color } from "$/design";
import { InsitutionalSignupForm, RegularRegisterForm } from "$/ui";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function RegisterTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMd = useMediaQuery(BreakPoint.device.min.md);

  return (
    <_>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation={isMd ? "" : "vertical"}
          // textColor={Color.strokeDark}
          sx={{
            "& .MuiTabs-flexContainer": {
              alignItems: "flex-end",
            },
            "& .MuiButtonBase-root": {
              alignItems: "flex-end",
            },
          }}
        >
          <Tab label="Regular Sign Up" {...a11yProps(0)} />
          <Tab label="Institutional Sign Up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <div className="tabs-divider" />
      <TabPanel value={value} index={0}>
        <RegularRegisterForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InsitutionalSignupForm />
      </TabPanel>
    </_>
  );
}

const _ = styled.div`
  margin-top: 2.8125rem;
  width: 100%;

  .tabs-divider {
    margin-top: 2.5rem;
  }

  .MuiTabs-flexContainer {
    justify-content: center;
  }

  .MuiButtonBase-root {
    width: 10.875rem;
    &[aria-selected="true"] {
      color: ${Color.strokeDark};
    }
  }

  .MuiTabs-indicator {
    background-color: ${Color.sub};
  }

  [role="tabpanel"] {
    .MuiBox-root {
      padding: 0;
    }
  }
`;
