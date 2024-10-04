import { Button, ButtonProps } from "@mui/material";
import configs from "./configs";
import Children from "@/shared/types/Children";

type SubmitButton = ButtonProps & Children;

export default function SubmitButton({ children, ...props }: SubmitButton) {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: 0,
        bgcolor: "primary.main",
        height: configs.fieldHeight,
        ...props.sx,
      }}
      variant="contained"
    >
      {children}
    </Button>
  );
}
