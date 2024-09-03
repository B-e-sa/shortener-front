"use client";
import { AppBar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import DirectionsIcon from "./icons/Directions";
import UserIcon from "./icons/User";
import Link from "next/link";

export default function PrimaryAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ heigth: "8vh", bgcolor: "primary.main" }} position="static">
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="open drawer"
              sx={{ mr: 2, transform: "rotate(15deg)", fill: "white" }}
            >
              <DirectionsIcon />
            </IconButton>
          </Link>
          <Link href="/">
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              noWrap
              fontSize={32}
              component="div"
              fontWeight="bold"
            >
              Shortener
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Link href="/my-urls">
              <Button sx={{ color: "#fff" }}>My URLs</Button>
            </Link>
          </Box>
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ fill: "white" }}
            >
              <UserIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
