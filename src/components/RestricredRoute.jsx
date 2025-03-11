import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/auth/selectors'
import { Navigate } from 'react-router-dom';

const RestricredRoute = ({ element, redirectTo='/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : element;
}

export default RestricredRoute