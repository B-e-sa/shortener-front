import TopUrls from "@/components/TopUrls";
import CreateUrlForm from "../components/CreateUrlForm";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "Center",
          width: { xs: 340, sm: 440, md: 690 },
        }}
      >
        <CreateUrlForm sx={{ marginBottom: 9, marginTop: 6 }} />
        <TopUrls sx={{ marginBottom: 6 }} />
      </Box>
    </main>
  );
}
