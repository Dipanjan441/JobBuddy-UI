import React from 'react'
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess, logout } from '../auth/state/authSlicer';
import type { AuthUser } from '../auth/types';

const Login = () => {
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
  return (
    <div>
      <button onClick={()=>dispatch(loginSuccess(user))}>Login</button>
      <button onClick={()=> dispatch(logout())}>logout</button>
    </div>
  )
}

export default Login
