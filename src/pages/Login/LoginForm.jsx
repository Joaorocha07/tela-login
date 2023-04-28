import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Link,
  Grid,
  Checkbox,
  FormControlLabel,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';

import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../contexts/AuthLogin';
import { loginSuccess, loginFailure } from '../../app/actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { login } = useContext(AuthContext);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const handleCloseErro = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErro('');
  };

  const handleLogar = async (event) => {
    event.preventDefault();

    if (!userId || !password) {
      setErro('Por favor, preencha os campos userId e Senha.');
      return;
    }

    try {
      const data = await login(userId, password, 'DV');
      dispatch(loginSuccess(data));
      console.log('Login bem sucedido: ', data);
    } catch (error) {
      dispatch(loginFailure(error));
      console.log('Login mal sucedido: ', error);
    }

    login(userId, password, 'DV');
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="80%"
      height="auto"
      gap="25px"
      sx={{
        margin: '0 auto',
      }}
    >
      <FormControl
        required
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        fullWidth
      >
        <InputLabel
          htmlFor="userId"
          sx={{
            ':active': {
              fontSize: '1.2rem',
            },
          }}
        >
          Cod Pessoa
        </InputLabel>
        <Input
          fullWidth
          type="number"
          name="userId"
          id="userId"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
          autoComplete="codPessoa"
          inputProps={{
            maxLength: 9,
          }}
          onInput={(e) => {
            const novoValor = e.target.value.replace(/[^0-9]/g, '').slice(0, 9);
            e.target.value = novoValor;
          }}
        />
      </FormControl>

      <FormControl
        required
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        fullWidth
      >
        <InputLabel
          htmlFor="password"
        >
          Senha
        </InputLabel>
        <Input
          fullWidth
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Manter conectado"
        sx={{
          alignSelf: 'start',
        }}
      />
      <Grid
        container
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="25px"
      >
        <Snackbar open={!!erro} autoHideDuration={6000} onClose={handleCloseErro}>
          <Alert onClose={handleCloseErro} severity="error">
            {erro}
          </Alert>
        </Snackbar>

        <Grid item width="100%">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="normal"
            fullWidth
            onClick={handleLogar}
          >
            Acessar
          </Button>
        </Grid>
        <Grid
          container
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Link
            href="./"
            variant="body1"
          >
            Esqueci minha senha
          </Link>
          <Link
            href="./"
            variant="body1"
          >
            Não tenho uma conta
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
