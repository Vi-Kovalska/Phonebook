import React from 'react'
import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contactsList}>
      {visibleContacts.map(cont => <li key={cont.id}><Contact data={cont} className={s.itemContact} /></li>)}
    </ul>
  )
}

export default ContactList