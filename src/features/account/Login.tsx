import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link, useNavigate } from 'react-router-dom'
import agent from '../../app/api/agent'

interface Props {
  setAuth: any
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function Login({ setAuth }: Props) {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const user = await agent.Account.login(values)
    if (user) {
      window.localStorage.setItem('userToken', user.token)
      setAuth(true)
      navigate('/')
    }
  }

  function handleInputChange(event: any) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kirjaudu
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Käyttäjätunnus"
              name="username"
              autoFocus
              onChange={handleInputChange}
              value={values.username}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Salasana"
              type="password"
              onChange={handleInputChange}
              value={values.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Kirjaudu
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register">{'Rekisteröidy'}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
