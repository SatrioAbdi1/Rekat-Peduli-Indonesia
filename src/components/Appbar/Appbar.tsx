"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = ['Beranda', 'Profil', 'Kegiatan', 'Publikasi'];

export default function DrawerAppBar(props: Props) {
  const {  children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <p>{item}</p>
              {/* <ListItemText primary={item} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = global.window !== undefined ? () => window.document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar style={{backgroundColor : 'white'}} component="nav">
        <Toolbar style={{height : '81px'}}>
          <Container maxWidth="lg" style={{display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between', paddingRight : '128px', paddingLeft : '128px' }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={'/rekat.png'} alt="" width={75} height={75}/>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button  key={item} sx={{ color: 'black', textTransform : 'none', fontWeight : 500,  }} >
                {item}
              </Button>
            ))}
            <Button  variant='outlined' sx={{ marginLeft : '16px', textTransform : 'none', fontWeight : 500, backgroundColor : '#FED186', color : '#E23228', borderColor : '#E23228', borderWidth : 1, borderRadius :2  }} >
                Jadi Relawan!
              </Button>
          </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}> */}
        <Toolbar />
        {children}
      {/* </Box> */}
    </Box>
  );
}
