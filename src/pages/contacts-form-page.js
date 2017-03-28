import React, { Component } from 'react';
import ContactForm from '../components/contact-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { newContact, saveContact, fetchContact } from '../actions/contacts-actions';

class ContactsFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchContact(_id)
    } else {
      this.props.newContact();
    }
  }

  submit = ({first, last, phone, email}) => {
    const contact = { name: { first, last }, phone, email }
    return this.props.saveContact(contact)
      .then(response => this.setState({ redirect:true }))
      .catch(err => {
         throw new SubmissionError(err.response.data)
       })
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ContactForm contact={this.props.contact} errorMessage={this.props.errorMessage} errors={this.props.errors} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errorMessage: state.contactStore.errorMessage,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {newContact, saveContact, fetchContact }) (ContactsFormPage);
