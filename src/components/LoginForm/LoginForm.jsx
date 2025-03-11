import { Field, Form, Formik } from 'formik'
import React, { useId } from 'react'
import s from './LoginForm.module.css'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idName = useId();
    const idPass = useId();

    const initialValues = {
        email: '',
        password: '',
    }
    const onSubmit = (values, actions) => {
        dispatch(login(values)).unwrap().then(res => {
            navigate('/contacts', { replace: true })
        }).catch(err => toast.error(err.message));
        actions.resetForm();
    }
  return (
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
          <Form className={s.form}>
              <div className={s.fieldWrapper}>
              <label htmlFor={idName}>Email:</label>
                  <Field type='email' name='email' id={idName} className={s.input}/>
               <label htmlFor={idPass}></label>
                  <Field type='password' name='password' id={idPass} className={s.input} />
                  </div>
              <button type='submit' className={s.btnSub}>Login</button>
          </Form>
    </Formik>
  )
}

export default LoginForm