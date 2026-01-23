import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const [open, setOpen] = useState(false);
  const sidebarWidth = 360;

  return (
    <>
      <AppBar position="static" color="transparent" sx={{ display: { xs: 'block', md: 'none' } }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Dashboard
          </Typography>
          {/* Burger – mobile only */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: sidebarWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: sidebarWidth,
          },
        }}
      >
        <Stack direction="column" spacing={2} height="100vh">
          <Box p={2}>
            <Typography variant="h1" sx={{ fontWeight: 700 }} fontSize="2rem">
              Dashboard
            </Typography>
          </Box>
          <Box flex={1} p={2}>
            Menu
          </Box>
          <Box p={2}>Extra</Box>
        </Stack>
      </Drawer>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography>Home</Typography>
          <Typography>Shop</Typography>
          <Typography>About</Typography>
        </Box>
      </Drawer>
    </>
  );
}
