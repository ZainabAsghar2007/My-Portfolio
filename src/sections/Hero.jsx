import { Box, Container, Typography, Button, Stack } from '@mui/material'

function Hero() {
  return (
    <Box id="home"
    component="section" 
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
        <Container maxWidth="md" sx={{textAlign: 'center'}}>
          <Typography component="h1"
            sx={{
              fontWeight: '800',
              color: '#23101e',
              mb: 1.5,
              fontSize: {xs: '2.3rem', sm: '3.2rem', md: '3.75rem'}
              }}
            >
              Hey! I am{' '}

            <Box component="span" sx={{color: '#381932'}}>
              Zainab Asghar
            </Box>
          </Typography>

          <Typography component="h2"
            sx={{
              fontWeight: '600',
              color: '#381932',
              mb: 2,
              fontSize: {xs: '1.2rem',sm: '1.4rem', md: '1.6rem' }
            }}
          >
            Front-End Developer
          </Typography>

          <Typography 
            sx={{
              color: '#5c3d54',
              maxWidth: 640,
              mx: 'auto',
              mb: 6,
              lineHeight: 1.7,
              fontSize: {xs: '1rem', sm: '1.1rem', md: '1.3rem'}
            }}
          >
            Computer Science student crafting modern, user-friendly
            frontend interfaces with React and JavaScript.
          </Typography>

          <Stack
            direction={{xs: 'column', sm: 'row'}}
            spacing={4}
            sx={{width: '100%', justifyContent: 'center', alignItems:'center'}}
          >
            <Button
              variant="contained"
              size='large'
              href='#projects'
              disableElevation
              sx={{
                bgcolor: '#381932',
                color: '#FFFAF3',
                textTransform: 'none',
                fontWeight: 600,
                px: 3.2,
                py: 1.8,
                borderRadius: 3,
                '&:hover': {  
                  backgroundColor: '#4A1240',
                  boxShadow: '0 6px 16px rgba(56, 25, 50, 0.22)',
                  transform: 'translateY(-2px)', 
                },
              }}
            >
              View My Work
            </Button>

            <Button
              variant="outlined"
              size='large'
              href='#contact'
              
              sx={{
                color: '#281726',
                backgroundColor: '#FAF7ED',
                borderColor: 'rgba(56, 25, 50, 0.25)',
                textTransform: 'none',
                fontWeight: 600,
                px: 3.2,
                py: 1.8,
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: 'rgba(74, 18, 64, 0.06)',
                  borderColor: '#4A1240',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Get in Touch
            </Button>

          </Stack>
        </Container>
      </Box>
    
  )
}

export default Hero
