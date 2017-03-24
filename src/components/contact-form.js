import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import classnames from 'classnames';

class ContactForm extends Component {

  state = {
    _id: this.props.contact ? this.props.contact._id : null,
    first: this.props.contact ? this.props.contact.name.first : '',
    last: this.props.contact ? this.props.contact.name.last : '',
    phone: this.props.contact ? this.props.contact.phone : '',
    email: this.props.contact ? this.props.contact.email : '',
    pageTitle: this.props.contact ? 'Edit Contact' : 'Add Contact',
    errors: {},
    loading: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Todo: Validate Form
    const { _id, first, last, phone, email } = this.state;
    const contact = {_id, name: { first, last}, phone, email}
    // Save contact
    this.setState({loading: true})
    this.props.saveContact(contact)
      .catch( err => {
        err.response.json().then(errors => {
          this.setState({ errors, loading:false })
        })
      })
  }

  render() {
    return (
      <Grid centered columns={2} >
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{this.state.pageTitle}</h1>
          <Form className={classnames('ui', 'form', {loading: this.state.loading })} onSubmit={this.handleSubmit}>

            {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

            <div className={classnames('field', {error: !!this.state.errors.first})}>
              <Form.Input
                label='First name'
                placeholder='First name'
                name="first"
                value={this.state.first}
                onChange={this.handleChange}
              />
              <span>{this.state.errors.first}</span>
            </div>
            <div className={classnames('field', {error: !!this.state.errors.last})}>
              <Form.Input
                label='Last name'
                placeholder='Last name'
                name="last"
                value={this.state.last}
                onChange={this.handleChange}
               />
            </div>
            <div className={classnames('field', {error: !!this.state.errors.phone})}>
              <Form.Input
                label='Phone'
                placeholder="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
            <div className={classnames('field', {error: !!this.state.errors.email})}>
              <Form.Input
                label='Email'
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <Button type='submit' primary>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

ContactForm.propTypes = {
  // contact    : React.PropTypes.object.isRequired,
  saveContact: React.PropTypes.func.isRequired
}

export default ContactForm;
