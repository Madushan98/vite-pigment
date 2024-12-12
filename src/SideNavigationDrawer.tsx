import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SideNavigationDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab') return;
    setIsOpen(open);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <List>
          {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideNavigationDrawer;