import React from 'react'
import s from './ConfirmationModal.module.css'
import { changeVisibleConfirmModal } from '../../redux/auth/slice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/contacts/operations'
import { selectIdContacts } from '../../redux/contacts/selectors'
import toast from 'react-hot-toast'

const ConfirmationModal = () => {
    const dispatch = useDispatch();
    const id = useSelector(selectIdContacts);
    const handleCancel = () => {
        dispatch(changeVisibleConfirmModal(false))
    }
    const handleAgree = (id) => {
        dispatch(deleteContact({id}));
        toast.success('Contact deleted!');
        dispatch(changeVisibleConfirmModal(false))
    }
  return (
    <div className={s.backdrop}>
          <div className={s.modal}>
              <h3>Are you shure? Delete the contact permanently?</h3>
              <div className={s.btnWrapper}>
                  <button onClick={() => {handleCancel()}} className={s.closeBtn}>Cancel</button>
                  <button onClick={() => {handleAgree(id)}}>Agree</button>
                  </div>
                  
              </div>
        </div>
  )
}

export default ConfirmationModal