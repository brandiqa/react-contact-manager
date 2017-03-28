import React, { Component } from 'react';
import ContactForm from '../components/contact-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { saveContact, fetchContact } from '../actions/contacts-actions';

class ContactsFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchContact(_id)
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
          <ContactForm onSubmit={this.submit} errorMessage={this.props.errorMessage} errors={this.props.errors}  />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.contactStore.errorMessage,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {saveContact, fetchContact }) (ContactsFormPage);
