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
        height: `${!responsive ? "79px" : "60px"}`,
        boxShadow: "4px 4px 45px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "0.5625rem 1.875rem 0.5625rem 0.5625rem",
        alignItems: "center",
        justifyContent: "space-between",
        ".details": {
          display: "none",
        },
        [theme.breakpoints.down("md")]: {
          ".text-desktop": {
            display: "none",
          },
          ".MuiTypography-root": {
            fontSize: "10px",
          },
          ".details": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
          },
        },
        [theme.breakpoints.up("md")]: {
          ".text-mobile": {
            display: "none",
          },
        },
      }}
    >
      <ContentModalContactInfo
        widthImg={!responsive ? 62 : 40}
        heightImg={!responsive ? 62 : 40}
        srcIcon="/images/list-view-pic1.png"
        title="Apartment Best Location"
        sxMain={{
          width: "fit-content",
          ".MuiGrid-root": {
            gap: "1rem",
          },
        }}
      />

      <Text className="text-desktop">15 Days</Text>
      <Text className="text-desktop">Rea State / Residential / Rent</Text>
      <Text className="text-desktop">15,000$</Text>

      <div className="details">
        <Text className="text-mobile">Rea State / Residential / Rent</Text>
        <Text>15 Days</Text>
        <Text className="text-desktop">Rea State / Residential / Rent</Text>
        <Text>15,000$</Text>
      </div>
      <IconButton
        sx={{
          width: "18px",
          height: "18px",
        }}
      >
        <DeleteOutlineOutlinedIcon color="delete" />
      </IconButton>
    </Grid>
  );
}
