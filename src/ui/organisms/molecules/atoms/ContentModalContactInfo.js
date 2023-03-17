import { Grid, styled, Typography } from "@mui/material";
import Image from "next/image";

export function ContentModalContactInfo(props) {
  const Text = styled(Typography)({
    fontSize: "16px",
    fontWeight: 400,
    color: "#1E1E1E",
  });
  return (
    <Grid container direction="row" width="473px" >
      <Grid container direction="row" gap="8px" alignItems="center" xl md lg>
        <Image width={22} height={22} alt="icon" src={props.srcIcon} />
        <Text>{props.title}</Text>
      </Grid>
      <Text xl md lg>
        {props.desc}
      </Text>
    </Grid>
  );
}
