import { client } from './';

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

export function fetchContact(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CONTACT',
      payload: client.get(`/api/contacts/${_id}`)
    })
  }
}
