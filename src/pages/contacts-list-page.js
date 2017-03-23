import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactCard from '../components/contact-card';
import { Card } from 'semantic-ui-react';
// import { contacts } from '../bootstrap';
import { fetchContacts } from "../actions/contacts-actions"

class ContactsListPage extends Component {

  componentDidMount = () => {

  }

  createContactCards() {
    return this.props.contacts.map((contact) => {
      return (
        <ContactCard key={contact._id} contact={contact}/>
      )
    });
  }

  render() {
    return (
      <div>
        <h1 style={{marginTop:"1em"}}>Contacts List</h1>
        <Card.Group>
          {this.createContactCards()}
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contactStore.contacts,
    error   : state.contactStore.error,
    fetching: state.contactStore.fetching,
    fetched : state.contactStore.fetched
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactsListPage);
