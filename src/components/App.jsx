import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { lazy, Suspense, useEffect } from 'react'
import { selectIsRefreshing } from '../redux/auth/selectors'
import { refreshUser } from '../redux/auth/operations'

import Layout from './Layout/Layout'
import PrivateRoute from './PrivateRoute'
import RestricredRoute from './RestricredRoute'
import clsx from 'clsx'
import { selectTheme } from '../redux/theme/selectors'
const HomePage = lazy(() => import ('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  return (
    <div className={clsx(theme === 'light' ? 'light' : 'dark')}>
      <Suspense fallback={<p>Loading...</p>}>
    {isRefreshing ? (<p>Refreshing...</p>) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
              <Route path="register" element={<RestricredRoute element={<RegistrationPage />} redirectTo='/contacts'/>} />
        <Route path="login" element={<RestricredRoute element={<LoginPage />} redirectTo='/contacts' /> } />
        <Route path="contacts" element={<PrivateRoute element={<ContactsPage/>} redirectTo='/login'/>} />
      </Route>
    </Routes>
        )}
        </Suspense>
      </div>
  )
}

export default App
