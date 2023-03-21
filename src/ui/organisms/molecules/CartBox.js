import {
  Grid,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ContentModalContactInfo } from "./atoms";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export function CartBox(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down("md"));
  const Text = styled(Typography)({
    fontSize: `${!responsive ? "14px" : "7px"}`,
    fontWeight: 400,
  });
  return (
    <Grid
      container
      direction="row"
      sx={{
        width: `${!responsive ? "914px" : "100%"}`,
        height:`${!responsive ? "79px" :"60px"}`,
        boxShadow: "4px 4px 45px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "9px 10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ContentModalContactInfo
        widthImg={!responsive ? 62 : 40}
        heightImg={!responsive ? 62 : 40}
        srcIcon="/images/list-view-pic1.png"
        title="Apartment Best Location"
        sxMain={{ width: "fit-content" }}
      />
      <Text>15 Days</Text>
      <Text>Rea State / Residential / Rent</Text>
      <Text>15,000$</Text>
      <IconButton>
        <DeleteOutlineOutlinedIcon
          color="delete"
          sx={{
            width: `${!responsive ? "" : "14px"}`,
            height: `${!responsive ? "" : "14px"}`,
          }}
        />
      </IconButton>
    </Grid>
  );
}
