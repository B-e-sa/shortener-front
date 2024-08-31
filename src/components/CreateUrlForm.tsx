"use client";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SxProps,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CopyIcon from "./icons/Copy";

export default function CreateUrlForm({ sx }: { sx?: SxProps }) {
  // TODO: Create form input states
  // TODO: Implement create url api call

  const [generatedUrl, setGeneratedUrl] = useState("");

  return (
    <Box
      className="unradius-fieldset"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        justifyItems: "center",
        height: 350,
        width: "100%",
        padding: "65px",
        borderRadius: 1,
        boxShadow: 1,
        ...sx,
      }}
    >
      <TextField placeholder="URL Title" variant="outlined" />
      <Box sx={{ width: 528, borderRadius: 0 }}>
        <TextField
          sx={{
            width: "70%",
          }}
          placeholder="Your URL"
          variant="outlined"
        />
        <Button
          sx={{
            height: "100%",
            width: "30%",
            bgcolor: "primary.main",
            borderRadius: 0,
          }}
          variant="contained"
        >
          Generate
        </Button>
      </Box>
      <OutlinedInput
        className="unbordered-fieldset"
        sx={{
          border: "dashed",
          borderColor: "lightgray",
          cursor: "default",
        }}
        value={generatedUrl}
        disabled
        type="text"
        placeholder="Generated URL"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <CopyIcon height={25} width={25} />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
