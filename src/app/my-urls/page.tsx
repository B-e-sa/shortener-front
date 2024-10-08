"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import URL from "@/shared/types/URL";

function createData(title: string, shortUrl: string, visits: number) {
  return { title, shortUrl, visits };
}

export default function MyUrls() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<URL[]>();
  const [searchedData, setSearchedData] = useState<URL[]>();

  useEffect(() => {
    const rows = [
      createData("Frozen yoghurt", "localhost:3000/tuVh", 6),
      createData("Ice cream sandwich", "localhost:3000/tuVh", 9),
      createData("Eclair", "localhost:3000/tuVh", 16),
      createData("Cupcake", "localhost:3000/tuVh", 3),
      createData("Gingerbread", "localhost:3000/tuVh", 16),
    ];

    setData(rows as URL[]);
  }, []);

  useEffect(() => {
    if (data) {
      setSearchedData(
        data?.filter(({ title }) => {
          return title.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [data, searchedData, search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const InlineData = ({ children }: { children: ReactNode }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid black",
        justifyContent: "space-between",
        width: "100%",
        paddingBlock: "8px",
      }}
    >
      {children}
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: 330, sm: 620, md: 690 },
        }}
      >
        <TextField
          sx={{ width: "100%", marginBlock: 3 }}
          label="Search title"
          onChange={handleSearch}
        />
        <TableContainer
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Short URL</TableCell>
                <TableCell align="left">Visits</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchedData?.map((row) => (
                <TableRow key={row.title}>
                  <TableCell width={160} component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="left">{row.shortUrl}</TableCell>
                  <TableCell align="left">{row.visits}</TableCell>
                  <TableCell sx={{ padding: 0 }} width={90} align="center">
                    <Button
                      sx={{ borderRadius: 0 }}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell sx={{ padding: 0 }} width={90} align="center">
                    <Button
                      sx={{ bgcolor: "primary.main", borderRadius: 0 }}
                      variant="contained"
                    >
                      Copy
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {searchedData?.map(({ shortUrl, title, visits }) => {
            return (
              <Box key={title} sx={{ marginBottom: 5, width: "100%" }}>
                <InlineData>
                  <p>Title</p>
                  <p>{title}</p>
                </InlineData>
                <InlineData>
                  <p>Short URL</p>
                  <p>{shortUrl}</p>
                </InlineData>
                <InlineData>
                  <p>Visits</p>
                  <p>{visits}</p>
                </InlineData>
                <Button
                  sx={{ borderRadius: 0, width: "50%" }}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
                <Button
                  sx={{
                    bgcolor: "primary.main",
                    borderRadius: 0,
                    width: "50%",
                  }}
                  variant="contained"
                >
                  Copy
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
