import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import AuthLogin from '../contexts/AuthLogin';
import Private from './Private';

export const AppRoutes = () => {
  return (
    <Router>
      <AuthLogin>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Private><Home /></Private>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthLogin>
    </Router>
  );
};

export default AppRoutes;
