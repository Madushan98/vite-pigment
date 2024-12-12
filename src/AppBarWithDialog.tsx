import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Paper } from '@mui/material';

const AppBarWithDialog: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  return (
    <Paper elevation={4}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" onClick={handleDialogOpen}>
            Open Dialog
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <Typography>This is the content of the dialog.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogClose} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default AppBarWithDialog;