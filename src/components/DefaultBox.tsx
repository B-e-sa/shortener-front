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
        width: { xs: 340, sm: 440, md: 690 },
        borderRadius: 1,
        boxShadow: 1,
        padding: { xs: "35px", sm: "65px" },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
