"use client";
import auth, { UserData } from "@/services/user/auth";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type AuthContext = {
  login: (token: string) => void;
  logout: () => void;
  userToken: string | undefined;
  userData: UserData | undefined;
};

export const Context = createContext({} as AuthContext);

const tokenName = "shortener_tkn";

const unguardedRoutes = ["login", "register"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const currentRoute = usePathname().split("/")[1];
  const [userToken, setUserToken] = useState<string | undefined>();
  const [userData, setUserData] = useState<UserData | undefined>();

  useEffect(() => {
    const token = window.localStorage.getItem(tokenName);

    if (token) {
      (async () => {
        await auth(token)
          .then((res) => {
            setUserData(res.data);

            if (unguardedRoutes.includes(currentRoute)) {
              router.push("/");
            }
          })
          .catch(() => logout());
      })();
    }
  }, []);

  const login = (token: string) => {
    setUserToken(token);
    window.localStorage.setItem(tokenName, token);
  };

  const logout = () => {
    setUserToken(undefined);
    window.localStorage.removeItem(tokenName);
    router.push("/login");
  };

  return (
    <Context.Provider value={{ userToken, userData, login, logout }}>
      {children}
    </Context.Provider>
  );
}

export function useAuthContext() {
  return useContext(Context);
}
