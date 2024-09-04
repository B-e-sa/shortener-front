import { api } from "@/lib/axios";
import URL from "@/shared/types/URL";
import { AxiosResponse } from "axios";

export default function getTopURLs(): Promise<AxiosResponse<URL[], []>> {
  return api.get("/url");
}
