import { combineReducers } from 'redux';
import ContactsReducer from './contacts-reducer';

const rootReducer = combineReducers({
  contacts: ContactsReducer
})

export default rootReducer;
