import { Box, Container } from "@mui/material";
import { ListViewCategory } from "../organisms/ListViewCategory";
// import { ListViewCategory } from "$/ui/organisms";

export function CategoryPage() {
  return (
    <Container maxWidth="lx">
      <Box sx={{ my: 4 }}>
        <ListViewCategory/>
      </Box>
    </Container>
  );
}
