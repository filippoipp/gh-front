import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../../static/img/logo.png';
import * as React from 'react';
import { Menu } from './Menu'

export const Navbar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar style={{backgroundColor: '#e41134'}}>
        <Menu/>
        <Typography style={{"flexGrow": 1, textAlign: 'center'}}>
          <img src={logo} alt="Filippo Full Stack Developer" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};