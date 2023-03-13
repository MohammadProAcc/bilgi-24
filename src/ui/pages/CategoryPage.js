import { Box, Container, Divider, Grid } from "@mui/material";
import { SideBar } from "$/ui/organisms";
import { ListViewCategory } from "$/ui/organisms";

export function CategoryPage() {
  return (
    <Container maxWidth="lx">
      <Grid container direction="row" sx={{ my: 4,justifyContent:"flex-end" }}>
        <SideBar/>
        <ListViewCategory/>
      </Grid>
    </Container>
  );
}
