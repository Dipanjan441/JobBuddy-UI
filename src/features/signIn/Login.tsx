import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess, logout } from '../auth/state/authSlicer';
import type { AuthUser } from '../auth/types';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //check if we have saved location in state otherwise redirect to home
  const from = location.state?.from.pathname || '/';
  console.log('location', location.state?.from || '/');
  const dispatch = useAppDispatch();
  const user: AuthUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@12.com',
    token: {
      accessToken: '',
      refreshToken: ''
    }
  }
  const loginHandler = () => {
    dispatch(loginSuccess(user));
    navigate(from, { replace: true });
  }
  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  )
}

export default Login
