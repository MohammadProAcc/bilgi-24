import { Container, Grid } from "@mui/material";
import { Layout } from "../layouts";
import { PostSingle } from "../organisms";

export function PostSinglePage() {
  return (
    <Layout>
      <Container maxWidth="lx">
        <Grid container direction="row" sx={{ my: 4 }}>
          <PostSingle />
        </Grid>
      </Container>
    </Layout>
  );
}
