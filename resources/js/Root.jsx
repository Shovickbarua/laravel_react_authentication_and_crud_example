import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './context/UserContext'
import AuthApi from './api/AuthApi';

const Root = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    return (<Navigate to="/" replace="true" />);
  }

  const logout = async () => {
    const res = await AuthApi.logout();
        if(res.success){
            setUser(null);
            navigate('/');
        }
    }

  return (
    <div className='mt-5'>
      <div className='mx-auto max-w-7xl'>
        <a onClick={()=>logout()} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4'>Logout</a>
      </div>
        <Outlet/>
    </div>
  )
}

export default Root