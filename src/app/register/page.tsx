"use client";
import React from "react";
import { Form, Formik } from "formik";
import { TextField, Typography } from "@mui/material";
import DefaultBox from "@/components/DefaultBox";
import ErrorMessage from "@/components/form/ErrorMessage";
import configs from "@/components/form/configs";
import SubmitButton from "@/components/form/SubmitButton";
import Link from "next/link";

type Errors = {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
};

export default function Page() {
  return (
    <DefaultBox sx={{ marginTop: 10 }}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
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

          const trimmedPasswordConfirmation =
            values.passwordConfirmation.trim();

          if (trimmedPasswordConfirmation != trimmedPassword) {
            errors.passwordConfirmation = "Passwords must be equal";
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
              name="username"
              variant="outlined"
              placeholder="Username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}
            <TextField
              sx={{ marginTop: configs.fieldsSpacement }}
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
            <TextField
              sx={{ marginTop: configs.fieldsSpacement }}
              type="password"
              name="passwordConfirmation"
              variant="outlined"
              placeholder="Password confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
            />
            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
            )}
            <SubmitButton
              sx={{
                marginTop: configs.fieldsSpacement,
                borderRadius: 0,
              }}
              type="submit"
              disabled={isSubmitting}
            >
              register
            </SubmitButton>
            <Link href={"/login"}>
              <Typography
                sx={{
                  color: "primary.main",
                  marginTop: 5,
                  textAlign: "center",
                }}
              >
                Already have an account?
              </Typography>
            </Link>
          </Form>
        )}
      </Formik>
    </DefaultBox>
  );
}
