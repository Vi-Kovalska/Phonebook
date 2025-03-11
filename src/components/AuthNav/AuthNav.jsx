import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './AuthNav.module.css'
import clsx from 'clsx';
const AuthNav = () => {
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
      };
  return (
    <div className={s.authNavWrapper}>
      <NavLink to='/register' className={buildLinkClass}>Register</NavLink>
      <NavLink to='/login' className={buildLinkClass}>Log in</NavLink>
    </div>
  )
}

export default AuthNav