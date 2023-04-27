import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://acl-hmg.prod.unitri.edu.br/login',
});

export const loginSessao = async (userId, senha) => {
  return api.post('', { userId, senha });
};
