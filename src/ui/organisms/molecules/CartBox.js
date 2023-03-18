import { Grid, IconButton, styled, Typography } from "@mui/material";
import { ContentModalContactInfo } from "./atoms";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export function CartBox(props) {
  const Text = styled(Typography)({
    fontSize: "14px",
    fontWeight: 400,
  });
  return (
    <Grid
      container
      direction="row"
      sx={{
        width: "914px",
        height: "79px",
        boxShadow: "4px 4px 45px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "9px 10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ContentModalContactInfo
        widthImg={62}
        heightImg={62}
        srcIcon="/images/list-view-pic1.png"
        title="Apartment Best Location"
        sxMain={{ width: "fit-content" }}
      />
      <Text>15 Days</Text>
      <Text>Rea State / Residential / Rent</Text>
      <Text>15,000$</Text>
      <IconButton>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Grid>
  );
}
