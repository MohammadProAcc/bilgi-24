import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SelectCategories } from "$/ui";

export function HomePage() {
  return (
    <Container maxWidth="lx">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <SelectCategories />
      </Box>
    </Container>
  );
}
