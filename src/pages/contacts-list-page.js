import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message, Card, Loader} from 'semantic-ui-react';
import ContactCard from '../components/contact-card';
import { fetchContacts } from "../actions/contacts-actions"

class ContactsListPage extends Component {

  componentDidMount = () => {
    this.props.fetchContacts()
  }

  createContactCards() {
    return this.props.contacts.map((contact) => {
      return (
        <ContactCard key={contact._id} contact={contact}/>
      )
    });
  }

  render() {
    const errorMessage = (
      <Message negative>
        <Message.Header>{this.props.errorMsg}</Message.Header>
        <p>Please contact the administrator</p>
      </Message>
    );

    const contactsComp = (
      <Card.Group>
        {this.createContactCards()}
      </Card.Group>
    )
    return (
      <div>
        <h1 style={{marginTop:"1em"}}>Contacts List</h1>
        { this.props.fetching ? <Loader active/> : ''}
        { this.props.errorMsg ? errorMessage : contactsComp }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contactStore.contacts,
    errorMsg: state.contactStore.errorMessage,
    fetching: state.contactStore.fetching,
    fetched : state.contactStore.fetched
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactsListPage);
