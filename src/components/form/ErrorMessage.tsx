import { SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function ErrorMessage({
  sx,
  children,
}: {
  sx?: SxProps;
  children: ReactNode;
}) {
  return (
    <Typography sx={{ marginTop: 1, ...sx }} color="error">
      {children}
    </Typography>
  );
}
