import PrimaryAppBar from "@/components/Header";
import theme from "@/theme";
import { Box, Button, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { AuthProvider } from "@/contexts/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <PrimaryAppBar />
              <Box
                sx={{
                  height: "92vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {children}
              </Box>
              <ToastContainer
                position="bottom-center"
                autoClose={3500}
                hideProgressBar={true}
                theme="light"
                toastStyle={{
                  backgroundColor: "#0062FF",
                  color: "white",
                  fill: "white",
                }}
                closeButton={false}
              />
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
