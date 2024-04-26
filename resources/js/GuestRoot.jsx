import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/UserContext';

const GuestRoot = () => {
    const { user } = useAuth();
    if ( user) {
        return (<Navigate to="/inventory" replace="true" />);
      }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default GuestRoot