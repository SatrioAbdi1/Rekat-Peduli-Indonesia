"use client"
import * as React from 'react';
import {
  AppBar, 
  Box, 
  CssBaseline, 
  Divider, 
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import {Mode, People, Menu as MenuIcon} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { ButtonLogout } from '../ButtonLogout';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

interface SidebarData {
  name: string;
  icon: React.ReactNode;
  redirect : string;
}



export function Sidebar(props: Props){
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
  
    const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
    };
  
    const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
    };
  
    const handleDrawerToggle = () => {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    };

    const sidebarData : SidebarData[] = [
      {
        name: 'Postingan',
        icon: <Mode/>,
        redirect : '/admin/posts'
      },
      {
        name: 'User',
        icon: <People/>,
        redirect : '/admin/users'
      }
    ]
  
    const drawer = (
      <div>
        <Toolbar>
          <Image src={'/rekat.png'} width={50} height={50} alt='logo rekat'/>
          <Typography variant="h6" noWrap>Rekat Peduli</Typography>
          </Toolbar>
        <Divider />
        <List>
          {sidebarData.map((item : SidebarData, index) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
              <Link style={{display : 'flex', flexDirection : 'row', alignItems : 'center'}} href={item.redirect}>

                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
                </Link>

              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"          
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display : {sm : 'none'}
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
      
          </Toolbar>         
          
        </AppBar>
        <Box 
          position="fixed"
          sx={{
            height : '64px',           
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` }, 
            display : {sm: ''},
          }}>
            <Box sx={{display : 'flex', justifyContent : 'flex-end'}}>
              <ButtonLogout/>
            </Box>
            <Divider/>
        </Box>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
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
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
        {children}
        </Box>
      </Box>
    );
}