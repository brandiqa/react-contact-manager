import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'

export default function ContactCard({contact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {contact.name.first} {contact.name.last}
        </Card.Header>
        <Card.Description>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Edit</Button>
          <Button basic color="red">Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: React.PropTypes.object.isRequired
}
