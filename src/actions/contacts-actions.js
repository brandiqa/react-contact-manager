import axios from "axios";

export const FETCH_CONTACTS = 'FETCH_CONTACTS';
export const FETCH_CONTACTS_FULFILLED = 'FETCH_CONTACTS_FULFILLED';
export const FETCH_CONTACTS_REJECTED = 'FETCH_CONTACTS_REJECTED';

export function fetchContacts(dispatch) {
  axios.get("/api/contacts")
    .then((response) => {
      console.log(response.data)
      dispatch({ type: FETCH_CONTACTS_FULFILLED, payload: response.data })
    })
    .catch((err) => {
      console.log(err)
      dispatch({type: FETCH_CONTACTS_REJECTED, payload: err})
    })
}
