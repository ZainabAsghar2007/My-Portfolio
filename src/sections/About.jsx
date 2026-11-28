import { Box, Container, Typography, Stack, Card, CardContent } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function About() {
  return (
    <Box component="section" id="about" sx={{py: { xs: 10, md: 12 }}}>
        <Container maxWidth="lg" >
            <Box sx={{mb:3}}>
              <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                  <Box sx={{
                    width: '60px',
                    height: '7px',
                    backgroundColor: '#4A1240',
                    borderRadius: '10px',
                  }}></Box>

                  <Typography
                      component='h2'
                      sx={{
                          fontWeight: 700,
                          fontSize: {xs: '1.75rem', md: '2.5rem'},
                          color: '#281726',
                          mb: 1
                      }}
                  >
                      About Me
                  </Typography>

                  <Box sx={{
                    width: '60px',
                    height: '7px',
                    backgroundColor: '#4A1240',
                    borderRadius: '10px',
                  }}></Box>
                </Box>

                <Typography 
                    sx={{
                        fontWeight: 700,
                        fontSize: {xs: '1.25rem', md: '1.75rem'},
                        color: '#744A68',
                        
                    }}
                >
                    Get to know me
                </Typography>
            </Box>

            <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: { xs: 4, md: 6 },
                  }}>
                <Typography sx={{color: 'text.primary', lineHeight: 1.8, mb: 2, width: '45%', fontWeight: 500, fontSize: {xs: '1rem', md: '1.2rem'}, width: { xs: '100%', md: '50%' }}}>
                    I'm pursuing a degree in Computer Science, building a strong foundation
                    in structured programming, problem-solving, and core software principles.
                    I like learning how systems work under the hood before putting pieces
                    together.
                    <br/><br/>
                    In frontend development, I focus on building clean, responsive interfaces with React,
                    JavaScript, and Material UI. I care deeply about layout clarity, smooth interactions,
                    and small visual details that make an interface feel effortless to use.
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={{ xs: 3, sm: 3, md: 4 }} sx={{ width: { xs: '100%', md: '50%' },maxWidth: { md: '500px' }, mt: { xs: 0, md: -9 } }}>
                  <Card
                    elevation={0}
                    sx={{
                      backgroundColor: '#FAF7ED',
                      border: '1px solid #E5DEC9',
                      borderLeft: '5px solid #4A1240',
                      borderRadius: 2,
                    }}
                  >
                    <CardContent sx={{p: 3.5}}>
                      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                        <SchoolIcon sx={{ color: '#4A1240', fontSize: 28 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#281726' }}>
                          Education
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#744A68', mt: 1, lineHeight: 1.7 }}>
                        Currently doing my BS in Computer Science at Virtual University of Pakistan. My coursework focuses on computing fundamentals, logic building, and database design—giving me a strong base behind the interfaces I build.
                      </Typography>
                    </CardContent>
                  </Card>

                  <Card
                    elevation={0}
                    sx={{
                      backgroundColor: '#FAF7ED',
                      border: '1px solid #E5DEC9',
                      borderLeft: '5px solid #4A1240',
                      borderRadius: 2,
                    }}
                  >
                    <CardContent sx={{p: 3.5}}>
                      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                        <AutoStoriesIcon sx={{ color: '#4A1240', fontSize: 28 }} />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#281726' }}>
                          Currently Learning
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: '#744A68', mt: 1, lineHeight: 1.7 }}>
                        Right now, I'm focused on getting better at structuring larger React apps so the code stays clean as a project grows. I'm also practicing connecting frontends to real APIs and learning how to debug tricky layout and state issues on my own.
                      </Typography>
                    </CardContent>
                  </Card>
                  </Stack>
              </Box >
        </Container>
    </Box>
  )
}

export default About
