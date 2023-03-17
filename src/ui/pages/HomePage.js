import { BoxCarousel, Layout, SelectCategories } from "$/ui";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export function HomePage() {
  return (
    <Layout headerMode="search">
      <Container maxWidth="lx">
        <Box sx={{ my: 4 }}>
          <SelectCategories />
          <BoxCarousel carouselTitle="Most Recent" />
          <BoxCarousel carouselTitle="With Discount" />
        </Box>
      </Container>
    </Layout>
  );
}
