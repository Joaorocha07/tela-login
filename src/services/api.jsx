import axios from 'axios';

/*
* Conexão com a api login -> postman
* @author João Victor Rocha Santos
* @param Number userId
* @param String password
* @param String database
*/
const loginConn = async (userId, password, database) => {
  return axios.post('https://acl-hmg.prod.unitri.edu.br/login', { userId, password, database });
};

export default loginConn;
