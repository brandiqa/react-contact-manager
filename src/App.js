import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactsListPage from './pages/contacts-list-page';
import ContactsFormPage from './pages/contacts-form-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
        </div>
        <Route exact path="/" component={ContactsListPage}/>
        <Route path="/contacts/new" component={ContactsFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactsFormPage}/>
      </Container>
    );
  }
}

export default App;
