import React from "react";
import { Col } from "react-bootstrap";

const ContactsCol = ({ children }) => {
  return (
    <Col className="d-flex align-items-center justify-content-center">
      {children}
    </Col>
  );
};

export default ContactsCol;
