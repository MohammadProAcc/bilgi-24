import { Box, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PhoneIcon from "@mui/icons-material/Phone";

const IconTitleChat = (props) => {
  return (
    <Grid container direction="row" gap="5px" alignItems="center">
      <Box display="flex" alignItems="center">
        {props.icon}
      </Box>
      <Typography sx={props.sx}>{props.title}</Typography>
    </Grid>
  );
};
export const ChatNavbar = () => {
  return (
    <Grid
      container
      direction="row"
      width="538px"
      height="56px"
      bgcolor="white"
      borderRadius="10px"
      padding="10px"
      sx={{ boxShadow: " 8px 4px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <IconTitleChat
            title="Parsa Barati"
            sx={{ color: "#282828", fontSize: "16px", fontWeight: 500 }}
            icon={
              <Image
                width={41}
                height={41}
                alt="profile-chat"
                src="/images/profile-chat.png"
                style={{ borderRadius: "5px" }}
              />
            }
          />
        </Box>

        <Grid>
        <IconButton >
            <MoreVertIcon color="sub"
              sx={{ width: "18px", height: "18px", }}
            />
          </IconButton>
          <IconButton >
            <PhoneIcon color="sub" sx={{ width: "18px", height: "18px" }} />
          </IconButton>
          
        </Grid>
      </Grid>
    </Grid>
  );
};
