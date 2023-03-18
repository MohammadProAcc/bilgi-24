import { BoxCarousel, Justifier, Layout, SelectCategories } from "$/ui";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";

export function HomePage() {
  return (
    <Layout headerMode="search">
      <Container maxWidth="lx">
        <Justifier>
          <SelectCategories />

          <Divider />

          <BoxCarousel carouselTitle="Most Recent" />
          <CarouselDivider />
          <BoxCarousel carouselTitle="With Discount" />
        </Justifier>
      </Container>
    </Layout>
  );
}

const Divider = styled.div`
  margin-top: 3.75rem;
  width: 100%;
`;

const CarouselDivider = styled.div`
  margin-top: 1rem;
  width: 100%;
`;
