import React, { Component } from 'react';
import ContactCard from '../components/contact-card';
import { Card } from 'semantic-ui-react';

const contacts = [
  {
    name: {
      first:"John",
      last:"Doe"
    },
    phone:"555",
    email:"john@gmail.com"
  },
  {
    name: {
      first:"Bruce",
      last:"Wayne"
    },
    phone:"777",
    email:"bruce.wayne@gmail.com"
  }
];

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
