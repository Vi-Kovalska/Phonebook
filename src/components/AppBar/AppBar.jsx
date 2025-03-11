import React from 'react'
import Navigation from '../Navigation/Navigation'
import AuthNav from '../AuthNav/AuthNav'
import UserMenu from '../UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import s from './AppBar.module.css'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
const AppBar = () => {
    const loggedIn = useSelector(selectIsLoggedIn);
  return (
      <div className={s.wrapperAppBar}>
          <Navigation />
      {loggedIn ? <UserMenu/> : <AuthNav />}
    </div>
  )
}

export default AppBar