import { Layout, ListViewCategory, SideBar } from "$/ui";
import { Container, Grid } from "@mui/material";

export function CategoryPage() {
  return (
    <Layout>
      <Container maxWidth="lx">
        <Grid
          container
          direction="row"
          sx={{ my: 4, justifyContent: "center" }}
        >
          <SideBar />
          <ListViewCategory />
        </Grid>
      </Container>
    </Layout>
  );
}
