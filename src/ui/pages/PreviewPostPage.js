import { Container, Grid } from "@mui/material";
import { Layout } from "../layouts";
import { PreviewPost } from "../organisms";

export function PreviewPostPage() {
  return (
    <Layout>
      <Container maxWidth="lx">
        <Grid container direction="row" sx={{ my: 4 }}>
          <PreviewPost />
        </Grid>
      </Container>
    </Layout>
  );
}
