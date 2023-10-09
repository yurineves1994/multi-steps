import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import { Login } from '~/templates/Login';
import { Admin } from '../templates/Admin';
import { Home } from '../templates/Home';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { token } = useAuth();

  return token ? <>{element}</> : <Navigate to='/login' />;
};

export function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<PrivateRoute element={<Admin />} />} />
      </Routes>
    </BrowserRouter>
  );
}
