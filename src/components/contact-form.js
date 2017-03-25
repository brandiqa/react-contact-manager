import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

  // state = {
  //   _id: this.props.contact ? this.props.contact._id : null,
  //   first: this.props.contact ? this.props.contact.name.first : '',
  //   last: this.props.contact ? this.props.contact.name.last : '',
  //   phone: this.props.contact ? this.props.contact.phone : '',
  //   email: this.props.contact ? this.props.contact.email : '',
  //   pageTitle: this.props.contact ? 'Edit Contact' : 'Add Contact',
  //   errors: {},
  //   loading: false
  // }
  //
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Todo: Validate Form
  //   const { _id, first, last, phone, email } = this.state;
  //   const contact = {_id, name: { first, last}, phone, email}
  //   // Save contact
  //   this.setState({loading: true})
  //   this.props.saveContact(contact);
  // }

  // render() {
  //   return (
  //     <Grid centered columns={2} >
  //       <Grid.Column>
  //         <h1 style={{marginTop:"1em"}}>{this.state.pageTitle}</h1>
  //         <Form className={classnames('ui', 'form', {loading: this.state.loading })} onSubmit={this.handleSubmit}>
  //
  //           {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}
  //
  //           <div className={classnames('field', {error: !!this.state.errors.first})}>
  //             <Form.Input
  //               label='First name'
  //               placeholder='First name'
  //               name="first"
  //               value={this.state.first}
  //               onChange={this.handleChange}
  //             />
  //             <span>{this.state.errors.first}</span>
  //           </div>
  //           <div className={classnames('field', {error: !!this.state.errors.last})}>
  //             <Form.Input
  //               label='Last name'
  //               placeholder='Last name'
  //               name="last"
  //               value={this.state.last}
  //               onChange={this.handleChange}
  //              />
  //           </div>
  //           <div className={classnames('field', {error: !!this.state.errors.phone})}>
  //             <Form.Input
  //               label='Phone'
  //               placeholder="phone"
  //               name="phone"
  //               value={this.state.phone}
  //               onChange={this.handleChange}
  //             />
  //           </div>
  //           <div className={classnames('field', {error: !!this.state.errors.email})}>
  //             <Form.Input
  //               label='Email'
  //               placeholder="email"
  //               name="email"
  //               value={this.state.email}
  //               onChange={this.handleChange}
  //             />
  //           </div>
  //           <Button type='submit' primary>Save</Button>
  //         </Form>
  //       </Grid.Column>
  //     </Grid>
  //   )
  // }

  render() {
    const { handleSubmit,  pristine, submitting } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>Add New Contact</h1>
          <Form onSubmit={handleSubmit}>
            <div>
              <Form.Field>
                <label htmlFor="first">First Name</label>
                <Field name="first" component="input" type="text" placeholder="First Name"/>
              </Form.Field>
            </div>
            <div>
              <Form.Field>
                <label htmlFor="last">Last Name</label>
                <Field name="last" component="input" type="text" placeholder="Last Name"/>
              </Form.Field>
            </div>
            <div>
              <Form.Field>
                <label htmlFor="phone">Phone</label>
                <Field name="phone" component="input" type="text" placeholder="Phone Number"/>
              </Form.Field>
            </div>
            <div className={classnames('field', {error: !!this.props.errors})}>
              <Form.Field>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" placeholder="Email Address"/>
              </Form.Field>
            </div>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

// ContactForm.propTypes = {
//   saveContact: React.PropTypes.func.isRequired
// }

// ContactForm = reduxForm({form: 'contact'})(ContactForm);

export default reduxForm({form: 'contact'})(ContactForm);
