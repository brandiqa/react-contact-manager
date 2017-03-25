import { client } from './';

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
  }
}
