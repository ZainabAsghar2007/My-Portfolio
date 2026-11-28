import { Box, Container, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';

const ICON_COLOR = '#4A1240';
const TILE_BG = '#FAF7ED';

const skillsData = [
  { name: 'HTML5', icon: HtmlIcon },
  { name: 'CSS3', icon: CssIcon },
  { name: 'JavaScript', icon: JavascriptIcon },
  { name: 'TypeScript', icon: CodeIcon },
  { name: 'React', icon: WidgetsIcon },
  { name: 'Material UI', icon: WidgetsIcon },
  { name: 'REST APIs', icon: DataObjectIcon },
  { name: 'C++', icon: CodeIcon },
  { name: 'OOP', icon: IntegrationInstructionsIcon },
  { name: 'Data Structures & Algorithms', icon: AccountTreeIcon },
  { name: 'Database Systems', icon: StorageIcon },
  { name: 'Software Engineering', icon: IntegrationInstructionsIcon },
  { name: 'Git', icon: AccountTreeIcon },
  { name: 'GitHub', icon: GitHubIcon },
];

function Skills() {
  return (
    <Box component="section" id="skills" sx={{py: { xs: 8, md: 10 }}}>
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
            My Skills
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
          Skills & Tools
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 1.5, sm: 2.5 },
          }}
        >
          {skillsData.map((skill) => {
            const IconComponent = skill.icon;

            return (
              <Box
                key={skill.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1.25, sm: 2 },
                  px: { xs: 1.75, sm: 3 },
                  py: { xs: 1.6, sm: 2.2 },
                  borderRadius: '14px',
                  backgroundColor: TILE_BG,
                  border: '1px solid rgba(74, 18, 64, 0.16)',
                  boxShadow: '0 2px 10px rgba(56, 25, 50, 0.04)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    borderColor: '#4A1240',
                    boxShadow: '0 6px 18px rgba(56, 25, 50, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <IconComponent
                  sx={{
                    fontSize: { xs: 22, sm: 28 },
                    color: ICON_COLOR,
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.88rem', sm: '1.05rem' },
                    color: '#281726',
                    lineHeight: 1.25,
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;