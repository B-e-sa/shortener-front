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
          width: 650
        }}
      >
        <CreateUrlForm sx={{ marginBottom: 9, marginTop: 6 }} />
        <TopUrls sx={{ marginBottom: 6 }} />
      </Box>
    </main>
  );
}
