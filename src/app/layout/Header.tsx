import { AppBar, Box, List, ListItem, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'

const leftLinks = [
  { title: 'Linnut', path: '/' },
  { title: 'Havainnot', path: '/sightings' },
  { title: 'Tietoa', path: '/about' },
]

const rightLinks = [
  { title: 'Kirjaudu', path: '/login' },
  { title: 'Rekisteröidy', path: '/register' },
]

const navStyles = {
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  '&:hover': {
    color: 'grey.500',
  },
  '&.active': { color: 'text.secondary' },
}

const loginStyles = {
  color: 'inherit',
  textDecoration: 'none',
  typography: 'b1',
  '&:hover': {
    color: 'grey.500',
  },
  '&.active': { color: 'text.secondary' },
}

export default function Header({ auth, setAuth }: any) {
  const handleLogout = () => {
    localStorage.clear()
    setAuth(false)
  }

  if (auth) {
    return (
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box display="flex" alignItems="center">
            <List sx={{ display: 'flex' }}>
              {leftLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
              <ListItem
                component={NavLink}
                to="/sightings/users"
                key="user"
                sx={navStyles}
              >
                Havaintoni
              </ListItem>
            </List>
          </Box>
          <Box display="flex" alignItems="center">
            <List sx={{ display: 'flex' }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={loginStyles}
                >
                  {title}
                </ListItem>
              ))}
              <ListItem
                onClick={handleLogout}
                component={NavLink}
                to="/"
                key="logout"
                sx={loginStyles}
              >
                Kirjaudu ulos
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    )
  } else {
    return (
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box display="flex" alignItems="center">
            <List sx={{ display: 'flex' }}>
              {leftLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box display="flex" alignItems="center">
            <List sx={{ display: 'flex' }}>
              {rightLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={loginStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
    )
  }
}
