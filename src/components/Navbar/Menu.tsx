import { IconButton, Menu as MuiMenu, MenuItem } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

export const Menu = () => {
  const listRoutes = [ 
    {
      name: 'Dashboard',
      path: ''
    },
    {
      name: 'Categorias',
      path: 'categories'
    },
    {
      name: 'Produtos',
      path: 'products'
    },
  ]
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
        {
          listRoutes.map(
            (routeName, key) => {
              return (
                <MenuItem 
                  key={key}
                  component={Link}
                  to={routeName.path}
                  onClick={handleClose}
                >
                  { routeName.name }
                </MenuItem>
              )
            }
          )
        }
      </MuiMenu>
    </>
  );
};
