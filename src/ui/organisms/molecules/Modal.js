import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { BiMessageAltDetail } from "react-icons/bi";
import Image from "next/image";
import { ContentModalContactInfo } from "./atoms";

export function Modal(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-elevation":{
      borderRadius:"10px",
      width:`${!responsive ? "" : "100%"}`,
    },
    "& .MuiDialogContent-root": {
      padding: theme.spacing(4),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },
  }));
  function BDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle
        sx={{
          marginTop: "20px",
          alignSelf: "center",
          fontSize: `${!responsive ? "18px" : "14px"}`,
          fontWeight: 500,
          color: "#1E1E1E",
        }}
        {...other}
      >
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  BDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  return (
    <div>
      <CustomDialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BDialogTitle id="customized-dialog-title" onClose={props.onClose}>
          Owner Info
        </BDialogTitle>
        <DialogContent>
          <Grid container direction="column" gap="20px">
            <ContentModalContactInfo
            widthImg={!responsive ? 22 : 12}
            heightImg={!responsive ? 22 : 12}
            srcIcon="/images/user-pic.svg"
              title="Username:"
              desc="Morteza Shirinzadeh"
            />
            <Divider />
            <ContentModalContactInfo
            widthImg={!responsive ? 22 : 12}
            heightImg={!responsive ? 22 : 12}
            srcIcon="/images/mail-pic.svg"
              title="Mail:"
              desc="itsmorteza.sh@gmail.com"
            />
            <Divider />
            <ContentModalContactInfo
            widthImg={!responsive ? 22 : 12}
            heightImg={!responsive ? 22 : 12}
            srcIcon="/images/whatsapp-pic.svg"
              title="Whatsapp:"
              desc="+98 921 008 5374"
            />
            <Divider />
            <ContentModalContactInfo
            widthImg={!responsive ? 22 : 12}
            heightImg={!responsive ? 22 : 12}
            srcIcon="/images/call-pic.svg"
              title="Call:"
              desc="+98 921 008 5374"
            />
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", padding: "10px" }}>
          <Button
            variant="outlined"
            startIcon={<BiMessageAltDetail />}
            onClick={props.onClose}
            sx={{
              border: "2px solid #F5B61A",
              fontSize: "14px",
              fontWeight: 500,
              color: "#011F28",
              textTransform: "none",
              "&:hover": {
                border: "2px solid",
              },
            }}
          >
            Start Chat
          </Button>
        </DialogActions>
      </CustomDialog>
    </div>
  );
}
