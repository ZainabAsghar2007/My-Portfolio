import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FBF3E6',   // light cream (page)
      paper: '#FFFAF3',     // cards
    },
    primary: {
      main: '#4A1240',
    },
    text: {
      primary: '#2B1726',
      secondary: '#744A68',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;