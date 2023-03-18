import { Box, Container } from "@mui/material";
import { Layout } from "../layouts";
import { Dashboard } from "../organisms";

export function ProfilePage() {
  return (
    <Layout headerMode="" authorized>
      <Container maxWidth="lx">
        <Box sx={{ my: 4 }}>
          <Dashboard />
        </Box>
      </Container>
    </Layout>
  );
}
