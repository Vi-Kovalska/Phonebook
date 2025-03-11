import React, { useEffect } from 'react'
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import s from './ContactsPage.module.css'
const ContactsPage = () => {
const items = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));

    return () => {
      abortController.abort();
    }
  }, [dispatch])

  const handleSubmit = (values, actions) => {
       const uniqueName = items.every(
          (cont) => cont.name.toLowerCase() !== values.name.toLowerCase()
        );
        const uniqueTel = items.every(
          (cont) => String(cont.number) !== String(values.number)
        );
          if (!uniqueTel) return toast.error("This number is already added to contacts");
          if (!uniqueName) return toast.error("This name is already added to contacts");
        
    const newObj = {
      ...values
    }
    dispatch(addContact(newObj));
    toast.success('New contact added!');
    actions.resetForm();
  }
  return (
    <div className={s.contentWrapper}>
        <h1>Phonebook</h1>
      <ContactForm btnName={'Add contact'} handleSubmit={handleSubmit} />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && error !== "ABORTED" && <p>Sorry...Error: {error}</p>}
      {items.length >= 1 && <ContactList/>}
      {(!loading && items.length === 0) && <p>The contact sheet is empty. Add your first contact in the form.</p>}
    </div>
  )
}

export default ContactsPage