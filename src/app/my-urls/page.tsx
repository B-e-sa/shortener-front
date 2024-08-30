import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function createData(
  title: string,
  url: string,
  shortUrl: string,
  visits: number
) {
  return { title, url, shortUrl, visits };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "https://google.com.br",
    "http://localhost:3000/tuVh",
    6
  ),
  createData(
    "Ice cream sandwich",
    "https://google.com.br",
    "http://localhost:3000/tuVh",
    9
  ),
  createData(
    "Eclair",
    "https://google.com.br",
    "http://localhost:3000/tuVh",
    16
  ),
  createData(
    "Cupcake",
    "https://google.com.br",
    "http://localhost:3000/tuVh",
    3
  ),
  createData(
    "Gingerbread",
    "https://google.com.br",
    "http://localhost:3000/tuVh",
    16
  ),
];

export default function Page() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">URL</TableCell>
            <TableCell align="left">Short URL</TableCell>
            <TableCell align="left">Visits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell width={200} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.url}</TableCell>
              <TableCell align="left">{row.shortUrl}</TableCell>
              <TableCell align="left">{row.visits}</TableCell>
              <TableCell sx={{ display: "flex" }} align="center">
                <Typography
                  sx={{ marginRight: 7 }}
                  variant="body1"
                  color="initial"
                >
                  Delete
                </Typography>
                <Typography variant="body1" color="initial">
                  Copy
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
