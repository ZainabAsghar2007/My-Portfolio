import { Box, Container, Typography, Card, CardContent, Chip, Stack, Link,} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';

const projectsData = [
  {
    id: 1,
    title: 'Book Library App',
    subtitle: 'React Web Application',
    description:
      'An interactive digital library to organize, search, and track reading progress with clean book cards, status filters, and persistent storage.',
    icon: AutoStoriesIcon,
    tech: ['React', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/ZainabAsghar2007',
  },
  {
    id: 2,
    title: 'Tic-Tac-Toe Game',
    subtitle: 'Interactive React Game',
    description:
      'A responsive two-player browser game featuring real-time win/draw detection, turn indicators, score tracking, and instant board reset.',
    icon: SportsEsportsIcon,
    tech: ['React', 'JavaScript', 'CSS3'],
    githubUrl: 'https://github.com/ZainabAsghar2007',
  },
  {
    id: 3,
    title: 'Coffee Shop Website',
    subtitle: 'Frontend Landing Page',
    description:
      'A warm, modern cafe website showcasing specialty brews, menu highlights, and smooth responsive layouts across mobile and desktop screens.',
    icon: CoffeeMakerIcon,
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/ZainabAsghar2007',
  },
];

function Projects() {
  return (
    <Box
      component="section" id="projects" sx={{ py: { xs: 8, md: 10 } }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: '60px',
              height: '7px',
              backgroundColor: '#4A1240',
              borderRadius: '10px',
            }}
          />

          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              color: '#281726',
              mb: 1,
            }}
          >
            My Work
          </Typography>

          <Box
            sx={{
              width: '60px',
              height: '7px',
              backgroundColor: '#4A1240',
              borderRadius: '10px',
            }}
          />
        </Box>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.25rem', md: '1.75rem' },
            color: '#744A68',
            mb: 4,
          }}
        >
          Featured Projects
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 3, md: 5 },
          }}
        >
          {projectsData.map((project) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={project.id}
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  backgroundColor: '#FAF7ED',
                  border: '1px solid rgba(74, 18, 64, 0.18)',
                  borderTop: '4px solid #4A1240',
                  borderRadius: 3,
                  boxShadow: '0 2px 10px rgba(56, 25, 50, 0.04)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: '#4A1240',
                    boxShadow: '0 8px 20px rgba(56, 25, 50, 0.1)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 2,
                        backgroundColor: 'rgba(74, 18, 64, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 26, color: '#4A1240' }} />
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: '#281726',
                          fontSize: '1.1rem',
                          lineHeight: 1.25,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#744A68',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                        }}
                      >
                        {project.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#5C3A52',
                      lineHeight: 1.75,
                      mb: 3,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={1.5} >
                    {project.tech.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(74, 18, 64, 0.07)',
                          color: '#4A1240',
                          border: '1px solid rgba(74, 18, 64, 0.15)',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          px: 0.6,
                          borderRadius: 1.5,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <Box sx={{ px: 3.5, pb: 3, pt: 0 }}>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    underline="none"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.8,
                      color: '#4A1240',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 17 }} />
                    <span>View Source</span>
                    <ArrowForwardIcon sx={{ fontSize: 15 }} />
                  </Link>
                </Box>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;       
      