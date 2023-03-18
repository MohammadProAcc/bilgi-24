import { Divider, Grid, Typography } from "@mui/material";
import { ContentModalContactInfo } from "./atoms";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export function ContactBox() {
  return (
    <Grid container direction="column" gap="10px">
      <Grid
        container
        direction="column"
        sx={{ width: "263px", height: "65px", gap: "10px" ,cursor:"pointer"}}
      >
        <Grid
          container
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <ContentModalContactInfo
            widthImg={27}
            heightImg={27}
            srcIcon="/images/contact-pic.png"
            title="Parsa Barati"
            sxMain={{ width: "fit-content" }}
          />
          <Typography sx={{ fontSize: "10px", fontWeight: 300 }}>
            Five Min Ago
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
            How Much Is It?
          </Typography>
          <DoneAllIcon color="sub" sx={{ width: "16px", height: "16px" }} />
        </Grid>
      </Grid>
      <Divider sx={{ borderWidth: "1px" }} />
    </Grid>
  );
}
