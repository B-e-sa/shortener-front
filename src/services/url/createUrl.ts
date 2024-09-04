import { api } from "@/lib/axios";
import URL from "@/shared/types/URL";
import { AxiosResponse } from "axios";

export default function createURL({
  title,
  url,
}: URL): Promise<AxiosResponse<URL, undefined>> {
  return api.post("/url", {
    title,
    url,
  });
}
