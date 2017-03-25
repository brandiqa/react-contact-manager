import { client } from './';
import { SubmissionError } from 'redux-form';

export const FETCH_CONTACTS_PENDING   = 'FETCH_CONTACTS_PENDING';
export const FETCH_CONTACTS_FULFILLED = 'FETCH_CONTACTS_FULFILLED';
export const FETCH_CONTACTS_REJECTED  = 'FETCH_CONTACTS_REJECTED';
export const SAVE_CONTACT_FULFILLED   = 'SAVE_CONTACT_FULFILLED';
export const SAVE_CONTACT_REJECTED    = 'SAVE_CONTACT_REJECTED';

export function fetchContacts() {
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get("/api/contacts")
    })
  }
}

export function saveContact(contact) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post("/api/contacts", contact)
    })
    .catch(err => {
      throw new SubmissionError({global:err.response.data.message, errors:err.response.data.errors})
    })
  }
}
