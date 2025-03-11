import React, { useId } from 'react'
import s from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';
const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const handleChangeFilter = (name) => dispatch(changeFilter(name));
  return (
    <div className={s.wrapper}>
    <label htmlFor={id}>Find contacts by name</label>
      <input id={id} type="text" name='nameContact' onChange={(e) => handleChangeFilter(e.target.value.trim())} value={filter} className={s.input} readOnly={contacts.length === 0} />
    </div>

  )
}

export default SearchBox