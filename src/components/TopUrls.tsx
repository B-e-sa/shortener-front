"use client";
import getTopURLs from "@/services/url/getTopURLs";
import URL from "@/shared/types/URL";
import { Box, Skeleton, SxProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TopUrls({ sx }: { sx?: SxProps }) {
  const [urls, setUrls] = useState<URL[]>();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getTopURLs()
      .then((res) => setUrls(res.data))
      .catch(() =>
        setErrorMessage("An error occurred when trying to retrieve the URLs")
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 1,
        boxShadow: 1,
        padding: 4,
        ...sx,
      }}
    >
      <Typography fontSize={24} marginBottom={3.5}>
        Top URLs this week
      </Typography>
      {!loading ? (
        urls && urls?.length !== 0 ? (
          <Box sx={{ width: "100%" }}>
            {urls.map((u, i) => {
              return (
                <div key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: 50,
                      paddingInline: 5,
                      bgcolor: i % 2 == 0 ? "lightgray" : "inherit",
                    }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Typography>{`${i + 1}.`}</Typography>
                      <p>{u.title}</p>
                    </Box>
                    <p>{u.shortUrl}</p>
                    <p>{u.visits}</p>
                  </Box>
                </div>
              );
            })}
          </Box>
        ) : (
          <Typography>{errorMessage}</Typography>
        )
      ) : (
        Array(10)
          .fill("")
          .map((_, i) => {
            return (
              <Skeleton
                key={i}
                sx={{ width: "100%", bgcolor: i % 2 == 0 ? "grey.200" : "grey.300" }}
                variant="rectangular"
                height={50}
              />
            );
          })
      )}
    </Box>
  );
}
