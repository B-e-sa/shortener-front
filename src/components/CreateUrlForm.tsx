"use client";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from "react";
import CopyIcon from "./icons/Copy";
import createURL from "@/services/url/createUrl";
import URL from "@/shared/types/URL";
import { toast } from "react-toastify";

type Errors = {
  title?: string;
  url?: string;
};

const inputHeight = { height: 55 };
const marginSpacement = 2;
const errorMarginOffset = marginSpacement * 4;

const ErrorMessage = ({
  sx,
  children,
}: {
  sx?: SxProps;
  children: ReactNode;
}) => {
  return (
    <Typography sx={{ marginTop: 1, ...sx }} color="error">
      {children}
    </Typography>
  );
};

export default function CreateUrlForm({ sx }: { sx?: SxProps }) {
  // TODO: Create form input states
  // TODO: Implement create url api call

  const [generatedUrl, setGeneratedUrl] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.currentTarget.value);
  };

  const copyToClipboard = () => {
    if (generatedUrl) {
      navigator.clipboard.writeText(`http://localhost:3000/${generatedUrl}`);
      toast("URL copied");
    }
  };

  const handleCreate = async () => {
    const trimmedTitle = title.trim();
    const trimmedURL = url.trim();
    const errors: Errors = {};

    if (trimmedTitle.length === 0) {
      errors.title = "This field cannot be empty";
    }

    const urlReg =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/;
    const isValidUrl = trimmedURL.match(urlReg);

    if (!isValidUrl) {
      errors.url = "Invalid url";
    }

    if (errors.title || errors.url) {
      setErrors(errors);
      return;
    }

    setErrors({});

    await createURL({
      title: trimmedTitle,
      url: trimmedURL,
    } as URL)
      .then((res) => {
        setTitle("");
        setUrl("");
        setGeneratedUrl(res.data.shortUrl);
        toast("URL generated with success!");
      })
      .catch(() => {
        toast("An error occurred when creating your URL");
      });
  };

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
        padding: { xs: "35px", sm: "65px" },
        borderRadius: 1,
        boxShadow: 1,
        ...sx,
      }}
    >
      <TextField
        sx={{ ...inputHeight }}
        placeholder="URL Title"
        variant="outlined"
        onChange={handleTitle}
        value={title}
      />
      {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: 0,
          marginTop: { xs: marginSpacement },
        }}
      >
        <TextField
          sx={{
            ...inputHeight,
            width: { xs: "100%", sm: "70%" },
            marginBottom: marginSpacement,
            backgroundColor: "white"
          }}
          onChange={handleUrl}
          placeholder="http://your-url.here"
          value={url}
          variant="outlined"

        />
        {errors.url && (
          <ErrorMessage
            sx={{
              display: {
                xs: "block",
                sm: "none",
                marginTop: -errorMarginOffset,
                marginBottom: marginSpacement * 10,
              },
            }}
          >
            {errors.url}
          </ErrorMessage>
        )}
        <Button
          sx={{
            ...inputHeight,
            width: { xs: "100%", sm: "30%" },
            bgcolor: "primary.main",
            borderRadius: 0,
          }}
          onClick={handleCreate}
          variant="contained"
        >
          Generate
        </Button>
      </Box>
      {errors.url && (
        <ErrorMessage
          sx={{
            display: {
              xs: "none",
              sm: "block",
              marginTop: -errorMarginOffset,
            },
          }}
        >
          {errors.url}
        </ErrorMessage>
      )}
      <OutlinedInput
        className="unbordered-fieldset"
        sx={{
          ...inputHeight,
          border: "dashed",
          borderColor: "lightgray",
          cursor: "default",
          marginTop: marginSpacement,
        }}
        value={generatedUrl}
        disabled
        type="text"
        placeholder="Generated URL"
        endAdornment={
          <InputAdornment onClick={copyToClipboard} position="end">
            <IconButton
              sx={{
                cursor: generatedUrl ? "pointer" : "not-allowed",
              }}
              aria-label="toggle password visibility"
              disableRipple={!generatedUrl}
              edge="end"
            >
              <CopyIcon
                fill={generatedUrl ? "black" : "gray"}
                height={25}
                width={25}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}
