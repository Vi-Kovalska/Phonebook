import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import clsx from 'clsx'
import { selectTheme } from '../../redux/theme/selectors'
import { changeTheme } from '../../redux/theme/slice'
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
  };
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const payloadTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <>
    <nav className={s.wrapNav}>
      <NavLink to='/' className={buildLinkClass}>HOME</NavLink>
      {isLoggedIn && <NavLink to='/contacts' className={buildLinkClass}>CONTACTS</NavLink>}
      </nav>
      <button onClick={()=> dispatch(changeTheme(payloadTheme))} className={s.toggleThemeBtn}>{theme}</button>

       </>
  )
}

export default Navigation