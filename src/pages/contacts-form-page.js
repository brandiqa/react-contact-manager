import React, { Component } from 'react';
import ContactForm from '../components/contact-form';
import { connect } from 'react-redux';
import { saveContact } from '../actions/contacts-actions';


class ContactsFormPage extends Component {

  state = {
    redirect: false
  }

  saveContact = contact => {
    console.log(contact)
    return this.props.saveContact(contact)
      .then(() =>{
        this.setState({redirect: true});
      })
  }

  render() {
    return (
      <ContactForm contact={this.props.contact}  saveContact={this.saveContact} />
    )
  }
}

function mapStateToProps() {
  return { contact: null }
}

export default connect(mapStateToProps, {saveContact}) (ContactsFormPage);
