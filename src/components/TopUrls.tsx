"use client";
import { Box, SxProps, Typography } from "@mui/material";

export default function TopUrls({ sx }: { sx?: SxProps }) {
  // TODO: Implement api call to get top urls
  // TODO: Implement states that mirrors api calls effects

  const dummyUrls: { title: string; shortUrl: string; visits: number }[] =
    Array(5).fill({
      title: "dummyUrl",
      shortUrl: "tuVh",
      visits: 120,
    });

  return (
    <Box
      sx={{
        height: 406,
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
      {dummyUrls.length !== 0 ? (
        <Box sx={{ width: "100%" }}>
          {dummyUrls.map((u, i) => {
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
        <Typography>No URLs were found</Typography>
      )}
    </Box>
  );
}
