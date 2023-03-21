import {
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

export function ContentModalContactInfo(props) {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const Text = styled(Typography)({
    fontSize: `${!responsive ? "16px" : "9px"}`,
    fontWeight: 400,
    color: "#1E1E1E",
    ...props.sxText,
  });
  return (
    <Grid
      container
      justifyContent="space-between"
      direction="row"
      width={`${!responsive ? "473px" : "100%"}`}
      sx={{ ...props.sxMain }}
    >
      <Grid
        container
        direction="row"
        gap={!responsive ? "8px" : "2px"}
        alignItems="center"
        width="fit-content"
        xl
        md
        lg
      >
        <Image
          width={props.widthImg}
          height={props.heightImg}
          alt="icon"
          src={props.srcIcon}
          style={{ borderRadius: "5px" }}
        />
        <Text className="text-desktop">{props.title}</Text>
      </Grid>
      <Text xl md lg>
        {props.desc}
      </Text>
    </Grid>
  );
}
