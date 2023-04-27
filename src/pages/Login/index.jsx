import { LockRounded } from '@mui/icons-material';
import {
  Avatar, Grid, Paper, Typography, Box, createTheme, ThemeProvider, useMediaQuery, LinearProgress,
} from '@mui/material';
import { useState } from 'react';
import students from '../../assets/img/students.jpg';
import LoginForm from './LoginForm';

const theme = createTheme();

const Login = () => {
  const [loading] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexWrap="nowrap"
        component="main"
        width="100vw"
        height="100vh"
      >
        {loading && (
        <LinearProgress sx={{
          color: '#1565C0',
          width: '100%',
          position: 'absolute',
          top: '0',
          height: '4px',
        }}
        />
        )}
        <Grid
          item
          width="100%"
          height="100%"
          xs={false}
          sx={{
            filter: 'blur(6px)',
            backgroundImage: `url(${students})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            zIndex: -1,
          }}
        />
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={5}
          xl={4}
          height={() => (matches ? '100%' : '92.5%')}
          bgcolor="#fff"
          display="flex"
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="center"
          component={Paper}
          elevation={6}
          square
          gap="60px"
        >
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar sx={{
              m: 1,
              backgroundColor: 'transparent',
            }}
            >
              <LockRounded
                color="primary"
                fontSize="large"
              />
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              textAlign="center"
              width="100%"
            >
              Realize seu Login
            </Typography>
          </Box>
          <LoginForm />
        </Grid>
        <Grid
          item
          md={false}
          lg={7}
          xl={7}
          height="92.5%"
          sx={{
            backgroundImage: `url(${students})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          component={Paper}
          elevation={6}
          square
        />
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
