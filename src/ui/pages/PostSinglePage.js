import { Container, Grid } from "@mui/material";
import { Layout } from "../layouts";
import { PostSingle } from "../organisms";
// import { PostSingle } from "$/ui/organisms";

export function PostSinglePage() {
  return (
    <Layout>
      <Container maxWidth="lx" sx={{ height: "auto" }}>
        <Grid container direction="row" sx={{ my: 4 }}>
          <PostSingle />
        </Grid>
      </Container>
    </Layout>
  );
}
