// Private.js
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CircularProgress, Container } from '@mui/material';
import { AuthContext } from '../contexts/AuthLogin';

const Private = ({ children }) => {
  const { authenticated, logado } = useContext(AuthContext);

  if (logado) {
    return (
      <Container style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }
    }
      >
        <CircularProgress />
      </Container>
    );
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

Private.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Private;
