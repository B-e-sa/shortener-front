"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Box, SxProps, TextField, Typography } from "@mui/material";
import DefaultBox from "@/components/DefaultBox";
import ErrorMessage from "@/components/form/ErrorMessage";
import configs from "@/components/form/configs";
import SubmitButton from "@/components/form/SubmitButton";
import Link from "next/link";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import register from "@/services/user/register";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { redirect, useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/authContext";

const schema = z
  .object({
    username: z
      .string()
      .trim()
      .min(5, "Username must have between 5 to 24 characters")
      .max(24),
    email: z.string().trim().email("Invalid email address"),
    password: z
      .string()
      .trim()
      .min(8, "Password must have between 8 to 32 characters")
      .max(32),
    passwordConfirmation: z.string().trim().min(8).max(32),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        path: ["passwordConfirmation"],
        message: "Passwords must be equal",
        code: "custom",
      });
    }
  });

export default function Register() {
  const router = useRouter();
  const { login } = useAuthContext();

  return (
    <DefaultBox sx={{ marginTop: 10 }}>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={async (values, { setSubmitting }) => {
          await register(values)
            .then((res) => {
              login(res.data);
              router.push("/");
            })
            .catch((e: AxiosError) => {
              toast((e.response?.data as ApiError).message);
            })
            .finally(() => setSubmitting(false));
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
