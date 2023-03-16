import { Container, Grid } from "@mui/material";
import { PostSingle } from "$/ui/organisms";

export function PostSinglePage() {
  return (
    <Container maxWidth="lx">
      <Grid
        container
        direction="row"
        sx={{ my: 4 }}
      >
        <PostSingle/>
      </Grid>
    </Container>
  );
}
