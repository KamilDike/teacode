import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Image from "next/image";
import userImageFallback from "/public/user.png";
import UserCol from "@/components/UserCol";
import { IUser } from "@/interfaces/IUser";

interface UsersTableProps {
  data: Array<IUser>;
  checkedIds: Map<string, string>;
  toggleId: (id: string, isChecked: boolean) => void;
}

const UsersTable = ({ data, checkedIds, toggleId }: UsersTableProps) => {
  return (
    <>
      {!data.length ? (
        <p className="mt-3">No data</p>
      ) : (
        data.map(({ avatar, id, first_name, last_name }) => {
          const isChecked = checkedIds.has(id.toString());
          return (
            <Row
              key={id}
              className="mt-3 m-0"
              onClick={() => toggleId(id.toString(), isChecked)}
            >
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
                <Form.Check type="checkbox" checked={isChecked} />
              </UserCol>
            </Row>
          );
        })
      )}
    </>
  );
};

export default UsersTable;
