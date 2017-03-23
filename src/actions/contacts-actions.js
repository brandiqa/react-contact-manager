import axios from "axios";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_FULFILLED = 'FETCH_CONTACTS_FULFILLED';
export const FETCH_CONTACTS_REJECTED = 'FETCH_CONTACTS_REJECTED';

const client = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json"
  }
})

export function fetchContacts() {
  return dispatch => {
    client.get("/api/contacts")
      .then(response => {
        dispatch({
          type: FETCH_CONTACTS_FULFILLED,
          payload: response.data.data
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_CONTACTS_REJECTED,
          payload: err.message
        })
      })
  }
}
