"use client";
import React from "react";
import { Form, Formik } from "formik";
import { Box, TextField } from "@mui/material";
import DefaultBox from "@/components/DefaultBox";
import ErrorMessage from "@/components/form/ErrorMessage";
import configs from "@/components/form/configs";
import SubmitButton from "@/components/form/SubmitButton";
import Link from "next/link";

type Errors = {
  email?: string;
  password?: string;
};

export default function Page() {
  return (
    <DefaultBox sx={{ marginTop: 20 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: Errors = {};

          const trimmedEmail = values.email.trim();

          if (
            !trimmedEmail ||
            !/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email adress";
          }

          const trimmedPassword = values.password.trim();

          if (trimmedPassword.length < 8) {
            errors.password = "Invalid password";
          }

          return errors;
        }}
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
                justifyContent: "space-between",
                marginTop: 4,
                marginBottom: -4,
                color: "primary.main"
              }}
            >
              <Link href="/forgot-password">Forgot your password?</Link>
              <Link href="/register">Create an account</Link>
            </Box>
          </Form>
        )}
      </Formik>
    </DefaultBox>
  );
}
