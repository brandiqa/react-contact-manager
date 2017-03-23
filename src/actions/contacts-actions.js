import axios from "axios";

export const FETCH_CONTACTS_PENDING = 'FETCH_CONTACTS_PENDING';
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
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get("/api/contacts")
    })
    .catch(err => {
      console.log(err)
    })
  }
}
