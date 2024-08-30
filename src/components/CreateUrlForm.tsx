"use client";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import CopyIcon from "./icons/Copy";
import { useState } from "react";


export default function CreateUrlForm() {
  const [generatedUrl, setGeneratedUrl] = useState(""); 

  return (
    <FormControl
      className="unradius-fieldset"
      sx={{
        boxShadow: "2px 2px 4px 3px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        justifyItems: "center",
        height: 350,
        width: 650,
        padding: "65px",
        borderRadius: "25px",
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
          cursor: "default"
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
    </FormControl>
  );
}
