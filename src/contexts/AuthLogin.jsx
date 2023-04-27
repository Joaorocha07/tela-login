import { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { loginSessao } from '../services/api';

export const AuthContext = createContext();

const AuthLogin = ({ children }) => {
  /*
  * Função de verificação para a tela de login - 26/04/2023
  * @author João Victor Rocha Santos
  * @param Number codPessoa
  * @param String senha
  */
  const login = async (codPessoa, senha) => {
    try {
      const resposta = await loginSessao(codPessoa, senha);
      console.log(resposta);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('CodPessoa ou senha incorretos');
      } else {
        console.error(error);
        console.log('Erro no servidor');
      }
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider value={useMemo(() => ({
      login,
    }), [])}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthLogin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLogin;
