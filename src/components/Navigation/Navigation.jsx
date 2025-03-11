import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import clsx from 'clsx'
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
      };
  return (
    <nav className={s.wrapNav}>
      <NavLink to='/' className={buildLinkClass}>HOME</NavLink>
      {isLoggedIn && <NavLink to='/contacts' className={buildLinkClass}>CONTACTS</NavLink>}
    </nav>
  )
}

export default Navigation