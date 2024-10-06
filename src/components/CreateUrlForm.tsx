"use client";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  SxProps,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import CopyIcon from "./icons/Copy";
import URL from "@/shared/types/URL";
import { toast } from "react-toastify";
import createURL from "@/services/url/createURL";
import DefaultBox from "./DefaultBox";
import ErrorMessage from "./form/ErrorMessage";
import configs from "./form/configs";
import SubmitButton from "./form/SubmitButton";
import { Form, Formik } from "formik";

type Errors = {
  title?: string;
  url?: string;
};

const inputHeight = { height: configs.fieldHeight };
const errorMarginOffset = configs.fieldsSpacement * 4;

export default function CreateUrlForm({ sx }: { sx?: SxProps }) {
  const [generatedUrl, setGeneratedUrl] = useState("");

  const copyToClipboard = () => {
    if (generatedUrl) {
      navigator.clipboard.writeText(`http://localhost:3000/${generatedUrl}`);
      toast("URL copied");
    }
  };

  return (
    <DefaultBox sx={{ ...sx }}>
      <Formik
        initialValues={{ title: "", url: "" }}
        validate={(values) => {
          const errors: Errors = {};

          const trimmedTitle = values.title.trim();

          if (trimmedTitle.length < 5 || trimmedTitle.length > 40) {
            errors.title = "Title must have have between 5 to 40 characters";
          }

          const trimmedUrl = values.url.trim();

          const urlReg =
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/;

          if (!urlReg.test(trimmedUrl)) {
            errors.url = "Invalid url";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          await createURL({
            title: values.title,
            url: values.url,
          } as URL)
            .then((res) => {
              setGeneratedUrl(res.data.shortUrl);
              toast("URL generated with success!");
            })
            .catch(() => {
              toast("An error occurred while creating your URL");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            className="unradius-fieldset"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "fit-content",
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              sx={{ marginTop: configs.fieldsSpacement }}
              name="title"
              variant="outlined"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && (
              <ErrorMessage>{errors.title}</ErrorMessage>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                borderRadius: 0,
                marginTop: { xs: configs.fieldsSpacement },
              }}
            >
              <TextField
                sx={{
                  width: { xs: "100%", sm: "70%" },
                  marginBottom: configs.fieldsSpacement
                }}
                name="url"
                variant="outlined"
                placeholder="URL"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.url}
              />
              {errors.url && (
                <ErrorMessage
                  sx={{
                    display: {
                      xs: "block",
                      sm: "none",
                      marginTop: -errorMarginOffset,
                      marginBottom: configs.fieldsSpacement * 10,
                    },
                  }}
                >
                  {errors.url}
                </ErrorMessage>
              )}
              <SubmitButton
                sx={{
                  width: { xs: "100%", sm: "30%" },
                }}
                onClick={handleSubmit as any}
              >
                Generate
              </SubmitButton>
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
                marginTop: configs.fieldsSpacement,
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
                      fill={generatedUrl ? "black" : "lightgray"}
                      height={25}
                      width={25}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Form>
        )}
      </Formik>
    </DefaultBox>
  );
}
