import { FETCH_CONTACTS_PENDING, FETCH_CONTACTS_FULFILLED, FETCH_CONTACTS_REJECTED,
SAVE_CONTACT_FULFILLED, SAVE_CONTACT_REJECTED } from '../actions/contacts-actions';

const defaultState = {
  contacts: [],
  fetching: false,
  fetched: false,
  errorMessage: null,
  errors: null
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
        errorMessage: null,
        contacts: action.payload.data.data,
      }

    case FETCH_CONTACTS_REJECTED:
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload.message
       }

    case SAVE_CONTACT_FULFILLED:
      return {
        ...state,
        contacts: [...state.contacts, action.payload.data]
      }

      case SAVE_CONTACT_REJECTED:
        const data = action.payload.response.data;
        return {
          ...state,
          errorMessage: data.message,
          errors: data.errors
        }

    default:
      return state;
  }
}
