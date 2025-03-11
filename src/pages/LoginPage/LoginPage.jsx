import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { NavLink } from 'react-router-dom'
import s from './LoginPage.module.css'
import clsx from 'clsx'
const LoginPage = () => {
     const buildLinkClass = ({ isActive }) => {
      return clsx(s.link, isActive && s.active);
    };
  return (
      <div>
      <LoginForm />
      <p>You don't have account yet? <NavLink to='/register'className={buildLinkClass}>Register!</NavLink></p>
    </div>
  )
}

export default LoginPage