import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';

class ContactForm extends Component {

  state = {
    _id: this.props.contact ? this.props.contact._id : null,
    name: this.props.contact ? this.props.contact.name : {first: '', last: ''},
    phone: this.props.contact ? this.props.contact.name.phone : '',
    email: this.props.contact ? this.props.contact.name.email : '',
    pageTitile: this.props.contact ? 'Edit Contact' : 'Add Contact',
    errors: {},
    loading: false
  }

  render() {
    return (
      <Grid centered columns={2} >
        <Grid.Column>
            <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
          <Form>
            <Form.Input label='First name' placeholder='First name' />
            <Form.Input label='Last name' placeholder='Last name' />
            <Form.Input label='Phone' placeholder="phone"/>
            <Form.Input label='Email' placeholder="email"/>
            <Button type='submit' primary>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ContactForm;
