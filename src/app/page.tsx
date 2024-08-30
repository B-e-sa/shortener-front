import TopUrls from "@/components/TopUrls";
import CreateUrlForm from "../components/CreateUrlForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <CreateUrlForm />
      <TopUrls />
    </main>
  );
}
