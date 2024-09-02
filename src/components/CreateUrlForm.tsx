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

  const inputHeight = { height: 55 };

  return (
    <Box
      className="unradius-fieldset"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        justifyItems: "center",
        height: "fit-content",
        width: "100%",
        padding: "65px",
        borderRadius: 1,
        boxShadow: 1,
        ...sx,
      }}
    >
      <TextField
        sx={{ ...inputHeight }}
        placeholder="URL Title"
        variant="outlined"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: 0,
          marginBlock: { xs: 2 },
        }}
      >
        <TextField
          sx={{
            ...inputHeight,
            width: { xs: "100%", sm: "70%" },
            marginBottom: { xs: 2 },
          }}
          placeholder="Your URL"
          variant="outlined"
        />
        <Button
          sx={{
            ...inputHeight,
            width: { xs: "100%", sm: "30%" },
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
          ...inputHeight,
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
