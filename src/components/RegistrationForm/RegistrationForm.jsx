
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import React, { useId } from 'react'
import s from './RegistrationForm.module.css'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/operations'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const idName = useId();
    const idMail = useId();
    const idPass = useId();
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const onlyLetters = /^[A-Za-zA-Яа-яЄєІіЇїҐґ-\s]+$/;
    const regularEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required!').min(3, 'Too Short!').max(50, 'Too Long!').matches(onlyLetters, 'The name must contain only letters!'),
        email: Yup.string().required('Email is required!').matches(regularEmail, 'Please enter a valid email!'),
        password: Yup.string().required('Password is required!').matches(regPassword, 'Please enter a valid password!'),
    })
    const navigate = useNavigate();
    const onSubmit = (values, actions) => {
        dispatch(register(values)).unwrap().then(res => {
            navigate('/contacts', { replace: true })
        }).catch(err => toast.error(err));
        actions.resetForm();
    }

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className={s.form}>
               <div className={s.fieldWrapper}>
              <label htmlFor={idName}>User name:</label>
              <Field type='text' name='name' id={idName} className={s.input}/>
               <ErrorMessage name='userName' component='p' className={s.error}/>
              <label htmlFor={idMail}>Email:</label>
              <Field type='email' name='email' id={idMail} className={s.input}/>
               <ErrorMessage name='email' component='p' className={s.error}/>
              <label htmlFor={idPass}>Password:</label>
              <Field type='password' name='password' id={idPass} className={s.input}/>
                  <ErrorMessage name='password' component='p' className={s.error} />
                  </div>
              <button type='submit' className={s.btnSub}>SignUp</button>
          </Form>
    </Formik>
  )
}

export default RegistrationForm