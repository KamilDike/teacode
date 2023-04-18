import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Image from "next/image";
import userImageFallback from "/public/user.png";
import UserCol from "@/components/UserCol";
import { IUser } from "@/interfaces/IUser";

interface UsersTableProps {
  data: Array<IUser>;
}

const UsersTable = ({ data }: UsersTableProps) => {
  return (
    <>
      {data.map(({ avatar, id, first_name, last_name }) => (
        <Row key={id} className="mt-3 m-0">
          <Col sm={1}>
            <Image
              src={avatar || userImageFallback}
              alt="user's image"
              width={50}
              height={50}
              priority
            />
          </Col>
          <UserCol>
            <p className="m-0">{first_name}</p>
          </UserCol>
          <UserCol>
            <p className="m-0">{last_name}</p>
          </UserCol>
          <UserCol className="d-flex align-items-center justify-content-center">
            <Form.Check type="checkbox" checked={true} />
          </UserCol>
        </Row>
      ))}
    </>
  );
};

export default UsersTable;
