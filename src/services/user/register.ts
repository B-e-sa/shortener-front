import { api } from "@/lib/axios";
import User from "@/shared/types/User";
import { AxiosResponse } from "axios";

export default function register({
  email,
  password,
  username
}: User): Promise<AxiosResponse<string>> {
  return api.post("/user", {
    email,
    password,
    username
  });
}
