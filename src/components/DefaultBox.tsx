import Children from "@/shared/types/Children";
import { Box, BoxProps } from "@mui/material";

type DefaultBox = BoxProps & Children;

export default function DefaultBox({ children, sx, ...props }: DefaultBox) {
  return (
    <Box
      className={props.className}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyItems: "center",
        borderRadius: 1,
        boxShadow: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
