import React, { Component } from 'react';
import ContactForm from '../components/contact-form';
import { connect } from 'react-redux';
import { saveContact } from '../actions/contacts-actions';


class ContactsFormPage extends Component {

  state = {
    redirect: false
  }

  submit = ({first, last, phone, email}) => {
    const contact = { name: { first, last }, phone, email }
    return this.props.saveContact(contact);
  }

  render() {
    return (
      <ContactForm onSubmit={this.submit}  validation={this.props.validation} />
    )
  }
}

function mapStateToProps(state) {
  return {
    validation: {
      errorMsg: state.errorMessage,
      errors: state.errors
    }
  }
}

export default connect(mapStateToProps, {saveContact}) (ContactsFormPage);
