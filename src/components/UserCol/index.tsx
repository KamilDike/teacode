import React from "react";
import { Col } from "react-bootstrap";

const UserCol = ({ children }) => {
  return (
    <Col className="d-flex align-items-center justify-content-center">
      {children}
    </Col>
  );
};

export default UserCol;
