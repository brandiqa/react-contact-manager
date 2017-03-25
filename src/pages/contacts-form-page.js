import React, { Component } from 'react';
import ContactForm from '../components/contact-form';
import { connect } from 'react-redux';
import { saveContact } from '../actions/contacts-actions';


class ContactsFormPage extends Component {

  state = {
    redirect: false
  }

  // saveContact = contact => {
  //   // console.log("saveContact: ", contact)
  //   this.props.saveContact(contact)
  //   // return this.props.saveContact(contact)
  //   //   .then((response) =>{
  //   //     this.setState({redirect: true});
  //   //   })
  // }

  submit = ({first, last, phone, email}) => {
    const contact = { name: { first, last },phone, email }
    this.props.saveContact(contact);
  }

  render() {
    return (
      <ContactForm contact={this.props.contact} onSubmit={this.submit}  />
    )
  }
}

function mapStateToProps() {
  return { contact: null }
}

export default connect(mapStateToProps, {saveContact}) (ContactsFormPage);
