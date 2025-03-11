import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css'
import { logout } from '../../redux/auth/operations';
import { replace, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const UserMenu = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector(selectUser)
  const navigate = useNavigate();
  
  return (
    <>
    <div className={s.wrap}>
     <h2 className={s.headerGreetingUser}>Welcome, {dataUser.email}!</h2>
    <button onClick={()=> dispatch(logout()).then(()=> navigate('/login', {replace: true})).catch(er=> toast.error(er.message))} className={s.btnLogOut}>Log out</button>
    </div>
      </>
  )
}

export default UserMenu