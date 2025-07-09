import React from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import { NavLink } from 'react-router-dom'
import s from './RegistrationPage.module.css'
import clsx from 'clsx'
const RegistrationPage = () => {
  const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
  return (
      <div className={s.pageWrapper}>
      <RegistrationForm />
      <p>You already have account? <NavLink to='/login'className={buildLinkClass}>Log in!</NavLink></p>
    </div>
  )
}

export default RegistrationPage