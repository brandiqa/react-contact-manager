import { combineReducers } from 'redux';
import ContactsReducer from './contacts-reducer';

const rootReducer = combineReducers({
  contactStore: ContactsReducer
})

export default rootReducer;
