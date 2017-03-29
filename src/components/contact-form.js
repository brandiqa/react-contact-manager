import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const schema = {
  name: {
    nested: true,
    first: {
      label: "First Name",
      required: true
    },
    last: {
      label: "Last Name",
      required: false
    }
  },
  phone: {
    label: "Phone",
    required: true
  },
  email: {
    label: "Email",
    required: true,
    validator: (value) => { return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid Email address' : '' }
  }
}

const validateField = (type, value) => {
  if(type.required && !value ) {
    return `You need to provide ${type.label}`
  }
  if(type.validator && value) {
    return type.validator(value)
  }
  return null
}

const validate = (values) => {
  const errors = {name: {}}
  _.each(schema, (type, field) => {
    if(type.nested){
      const nestedSchema = _.omit(type,'nested')
      _.each(nestedSchema, (ntype, nfield) => {
          const nvalue = values[field] ? values[field][nfield] : null
          const msg = validateField(ntype, nvalue)
          if(msg) {
            errors[field][nfield] = { message: msg }
          }
      })
    } else {
      const msg = validateField(type, values[field])
      if(msg) {
        errors[field] = { message: msg }
      }
    }
  })
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
    const { handleSubmit, pristine, submitting, loading } = this.props;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="name.first" type="text" component={renderField} label="First Name"/>
              <Field name="name.last" type="text" component={renderField} label="Last Name"/>
            </Form.Group>
            <Field name="phone" type="text" component={renderField} label="Phone"/>
            <Field name="email" type="text" component={renderField} label="Email"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate })(ContactForm);
