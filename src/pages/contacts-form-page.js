import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react'

class ContactsFormPage extends Component {
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

export default ContactsFormPage;
