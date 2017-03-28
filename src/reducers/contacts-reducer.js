const defaultContact = {
  name:{}
}

const defaultState = {
  contacts: [],
  contact: defaultContact,
  fetching: false,
  fetched: false,
  errorMessage: null,
  errors: {}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_PENDING':
      return {
        ...state,
        fetching: true
      }

    case 'FETCH_CONTACTS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        errorMessage: null,
        contacts: action.payload.data.data,
      }

    case 'FETCH_CONTACTS_REJECTED':
      return {
        ...state,
        fetching: false,
        errorMessage: action.payload.message
       }

    case 'NEW_CONTACT':
      return {
        ...state,
        contact: defaultContact
      }

    case 'SAVE_CONTACT_FULFILLED':
      return {
        ...state,
        contacts: [...state.contacts, action.payload.data],
        errorMessage: null,
        errors: {}
      }

    case 'SAVE_CONTACT_REJECTED':
      const data = action.payload.response.data;
      const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { first, last, phone, email };
      return {
        ...state,
        errorMessage: data.message,
        errors: errors
      }

    case 'FETCH_CONTACT_FULFILLED':
      const contact = action.payload.data;
      return {
        ...state,
        contact
      }

    default:
      return state;
  }
}
