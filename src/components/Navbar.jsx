import { useState } from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function BrandLogo({ onSelect }) {
  return (
    <Box
      component="a"
      href="#home"
      onClick={() => onSelect('#home')}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        textDecoration: 'none',
        '&:hover .logo-badge': {
          transform: 'rotate(-6deg) translateY(-2px)',
          boxShadow: '0 8px 18px rgba(74, 18, 64, 0.35)',
        },
      }}
    >
      
      <Box
        className="logo-badge"
        sx={{
          position: 'relative',
          width: 44,
          height: 44,
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4A1240 0%, #8E3B7E 100%)',
          boxShadow: '0 4px 12px rgba(74, 18, 64, 0.28)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          overflow: 'hidden',

          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.35), transparent 60%)',
            transform: 'rotate(25deg)',
          },
        }}
      >
        <Typography
          component="span"
          sx={{
            position: 'relative',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '-0.02em',
            color: '#FFFAF3',
            lineHeight: 1,
          }}
        >
          ZA
        </Typography>
      </Box>

      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.4 }}>
        <Typography
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: '1.02rem',
            color: 'text.primary',
            letterSpacing: '0.01em',
            lineHeight: 1.25,
            pt: '2px',
          }}
        >
          Zainab Asghar
        </Typography>

        <Typography
          component="span"
          sx={{
            fontWeight: 600,
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            lineHeight: 1,
          }}
        >
          Frontend Developer
        </Typography>
      </Box>
    </Box>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        pt: 2.5,
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
      onClick={handleDrawerToggle}
    >
      <Box sx={{ px: 2.5, pb: 2.5 }}>
        <BrandLogo onSelect={setActiveHref} />
      </Box>

      <List>
        {navLinks.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <ListItem key={item.label} disablePadding sx={{ px: 2, mb: 0.8 }}>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                sx={{
                  borderRadius: 1.5,
                  color: isActive ? 'primary.main' : 'text.secondary',
                  fontWeight: 600,
                  textDecoration: isActive ? 'underline' : 'none',
                  textUnderlineOffset: '5px',
                  textDecorationThickness: '2px',
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: '100%',
          bgcolor: 'background.default',
          borderBottom: '1px solid rgba(74, 18, 64, 0.14)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              width: '100%',
              minHeight: { xs: 68, md: 76 },
              justifyContent: 'space-between',
            }}
          >
            <BrandLogo onSelect={setActiveHref} />

            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4.5 }}>
                {navLinks.map((item) => {
                  const isActive = activeHref === item.href;

                  return (
                    <Button
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveHref(item.href)}
                      disableRipple
                      sx={{
                        position: 'relative',
                        minWidth: 'auto',
                        px: 0.25,
                        py: 0.5,
                        borderRadius: 0,
                        color: isActive ? 'primary.main' : 'text.secondary',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        letterSpacing: 0,
                        transition: 'color 0.2s ease',

                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: '2px',
                          bgcolor: 'primary.main',
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left center',
                          transition: 'transform 0.22s ease',
                        },

                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: 'transparent',

                          '&::after': {
                            transform: 'scaleX(1)',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </Box>
            ) : (
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Navbar;