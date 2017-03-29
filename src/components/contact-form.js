import React, { Component } from 'react';
import { Form, Grid, Button, Message } from 'semantic-ui-react';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {name:{}};
  if(!values.name || !values.name.first) {
    errors.name.first = {
      message: 'You need to provide First Name'
    }
  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Field className={classnames({error:touched && error})}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && error && <span className="error">{error.message}</span>}
  </Form.Field>
)

class ContactForm extends Component {

  // Load Contact Asynchronously
  componentWillReceiveProps = (nextProps) => {
    const { contact } = nextProps;
    // Initialize form only once
    if(contact._id !== this.props.contact._id) {
      this.props.initialize(contact)
    }
  }

  render() {
    const { handleSubmit, pristine, submitting, loading, errorMessage, errors } = this.props;
    const { first, last, phone, email } = errors;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>

          {
            !!errorMessage &&
            <Message error style={{textTransform:"capitalize"}} header={errorMessage}/>
          }

          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              {/* <Form.Field className={classnames({error:!!first})}>
                <label htmlFor="name.first">First Name</label>
                <Field name="name.first" component="input" type="text" placeholder="First Name"/>
                <span className="error">{!!first && first.message}</span>
              </Form.Field> */}
              {/* <Field name="name.first" component={renderField} type="text" placeholder="First Name"/> */}
              <Field name="name.first" type="text" component={renderField} label="First Name"/>

                <Field name="name.last" type="text" component={renderField} label="Last Name"/>

              {/* <Form.Field className={classnames({error: !!last})}>
                <label htmlFor="name.last">Last Name</label>
                <Field name="name.last" component="input" type="text" placeholder="Last Name"/>
                <span className="error">{!!last && last.message}</span>
              </Form.Field> */}
            </Form.Group>

            {/* <Form.Field className={classnames({error: !!phone})}>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" component="input" type="text" placeholder="Phone Number"/>
              <span className="error">{!!phone && phone.message}</span>
            </Form.Field> */}
            <Field name="phone" type="text" component={renderField} label="Phone"/>

            {/* <Form.Field className={classnames({error: !!email})}>
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" type="email" placeholder="Email Address"/>
              <span className="error">{!!email && email.message}</span>
            </Form.Field> */}
              <Field name="email" type="text" component={renderField} label="Email"/>

            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate })(ContactForm);
