import { combineReducers } from 'redux';
import ContactsReducer from './contacts-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactsReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
