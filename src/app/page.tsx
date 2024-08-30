import TopUrls from "@/components/TopUrls";
import CreateUrlForm from "../components/CreateUrlForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <CreateUrlForm sx={{ marginBottom: 9, marginTop: 6 }} />
      <TopUrls />
    </main>
  );
}
