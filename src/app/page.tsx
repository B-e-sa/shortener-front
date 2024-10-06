import TopUrls from "@/components/TopUrls";
import { Box } from "@mui/material";
import CreateUrlForm from "../components/CreateUrlForm";

export default function Home() {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <CreateUrlForm sx={{ marginBottom: 9, marginTop: 6 }} />
        <TopUrls sx={{ marginBottom: 6 }} />
      </Box>
    </main>
  );
}
