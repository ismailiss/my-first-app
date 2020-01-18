import React from "react";
import { Form } from "react-bootstrap";

export default function Input(props) {
  return (
    <Form>
      <Form.Group controlId={props.placeholder}>
        <Form.Label>{props.placeholder}</Form.Label>
        <Form.Control
          type="text"
          placeholder={props.placeholder}
          onChange={event => {
            props.setmyinputvalue(event.target.value);
            console.log(event.target.value);
          }}
          value={props.myInputValue}
        />
      </Form.Group>
    </Form>
  );
}
