import React, { Component } from 'react';
import ContactCard from '../components/contact-card';
import { Card } from 'semantic-ui-react';
import { contacts } from '../bootstrap';
class ContactsListPage extends Component {

  createContactCards() {
    return contacts.map((contact) => {
      return (
        <ContactCard contact={contact}/>
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

export default ContactsListPage;
