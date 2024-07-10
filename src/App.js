import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileNavigation from './mobileNavigation';
import { LeagueProvider } from './leagueContext';

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';
import LogoutButton from './components/App/logoutButton';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff2d55', // Bachelor red
    },
    secondary: {
      main: '#007aff', // Bachelor blue
    },
  },
});

function App() {
  const { token, setToken } = useToken();
  if(!token){
    return <Login setToken={setToken}></Login>
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <LeagueProvider>
        <div>
          <MobileNavigation />
          <Routes>
            <Route
              path="/"
              // element={<HomePage/>}
            />
            <Route
              path="/standings"
              // element={<StandingsPage/>}
            />
            <Route
              path="/teams"
              // element={<TeamsPage/>}
            />
          </Routes>
          <nav>
            <LogoutButton/>
          </nav>
        </div>
        </LeagueProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
