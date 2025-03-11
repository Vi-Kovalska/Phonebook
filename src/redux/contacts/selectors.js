import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';
import toast from 'react-hot-toast';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectIdContacts = state => state.contacts.idContacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    const visibleContacts = contacts.filter(
      cont =>
        cont.name.toLowerCase().includes(filterName.toLowerCase()) ||
        String(cont.number).includes(String(filterName))
    );

    if (visibleContacts.length === 0 && contacts.length !== 0) {
      toast('Sorry, no match found.');
    }
    return visibleContacts;
  }
);
