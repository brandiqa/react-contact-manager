import { FETCH_CONTACTS_PENDING, FETCH_CONTACTS_FULFILLED, FETCH_CONTACTS_REJECTED } from '../actions/contacts-actions';

const defaultState = {
  contacts: [],
  fetching: false,
  fetched: false,
  error: null
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case FETCH_CONTACTS_PENDING:
      return {
        ...state,
        fetching: true
      }

    case FETCH_CONTACTS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        contacts: action.payload.data.data,
      }

    case FETCH_CONTACTS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload.message
       }

    default:
      return state;
  }
}
