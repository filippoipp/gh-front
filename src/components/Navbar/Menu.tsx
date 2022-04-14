import { IconButton, Menu as MuiMenu, MenuItem } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton
        style={{ color: "#fbc004" }}
        edge="start"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id="menu-appbar"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Categorias</MenuItem>
        <MenuItem onClick={handleClose}>Produtos</MenuItem>
      </MuiMenu>
    </>
  );
};
