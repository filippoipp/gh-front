import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import logo from '../../static/img/logo.png';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar>
      <Toolbar style={{backgroundColor: '#e41134'}}>
        <IconButton
          style={{"color": "#fbc004"}}
          edge="start"
          aria-label="open drawer"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          id="menu-appbar"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            Categorias
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Produtos
          </MenuItem>
        </Menu>
        <Typography style={{"flexGrow": 1, textAlign: 'center'}}>
          <img src={logo} alt="Filippo Full Stack Developer" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};