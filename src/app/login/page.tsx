"use client";
import React from "react";
import { Form, Formik } from "formik";
import { Box, TextField, Typography } from "@mui/material";
import DefaultBox from "@/components/DefaultBox";
import ErrorMessage from "@/components/form/ErrorMessage";
import configs from "@/components/form/configs";
import SubmitButton from "@/components/form/SubmitButton";
import Link from "next/link";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const schema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().trim(),
});

export default function Login() {
  return (
    <DefaultBox sx={{ marginTop: 20 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <TextField
              type="email"
              name="email"
              variant="outlined"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            <TextField
              sx={{ marginTop: configs.fieldsSpacement }}
              type="password"
              name="password"
              variant="outlined"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
            <SubmitButton
              sx={{
                marginTop: configs.fieldsSpacement,
                borderRadius: 0,
              }}
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </SubmitButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 4,
                marginBottom: { xs: 0, sm: -4 },
                color: "primary.main",
              }}
            >
              <Link href="/forgot-password">
                <Typography sx={{ marginBottom: 1 }}>
                  Forgot your password?
                </Typography>
              </Link>
              <Link href="/register">
                <Typography>Create an account</Typography>
              </Link>
            </Box>
          </Form>
        )}
      </Formik>
    </DefaultBox>
  );
}
