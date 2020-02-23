import React from 'react';
import PrimaryLayout from '../layouts/PrimaryLayout';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <PrimaryLayout column="col-10">
      <Form>
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="contactForm.Subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject..." />
        </Form.Group>
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Enter Message.." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </PrimaryLayout>
  );
};

export default Contact;
