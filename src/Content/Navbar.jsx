import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, 
        Stack, 
        Box, 
        CssBaseline, 
        List, 
        Divider, 
        Drawer, 
        IconButton, 
        ListItem, 
        ListItemButton, 
        ListItemText, 
        Toolbar, 
        Typography, 
        Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { OurImpactComponent } from './OurImpactComponent';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, sm: 'block' }}>
        <img src='img/logo.png' alt="Stray Pals Philippines Logo" height="80" width="200"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#F8F8FF' }}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src='img/logo.png' alt="Stray Pals Philippines Logo" height="80" width="200" />
          </Typography>
          <Stack direction="row" spacing={1}>
              <Button variant="contained" color="primary">Kapon</Button>

            <Link to="/adopt"> 
              <Button variant="contained" color="primary">Adopt</Button>
            </Link>
              <Button variant="contained" color="success">Donate</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;