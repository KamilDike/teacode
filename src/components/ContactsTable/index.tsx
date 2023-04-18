import React from "react";
import { Form, Row } from "react-bootstrap";
import Image from "next/image";
import userImageFallback from "/public/user.png";
import ContactCol from "@/components/ContactCol";
import { IContact } from "@/interfaces/IContact";

interface ContactsTableProps {
  data: Array<IContact>;
  checkedIds: Map<string, string>;
  toggleId: (id: string, isChecked: boolean) => void;
}

const ContactsTable = ({ data, checkedIds, toggleId }: ContactsTableProps) => {
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
              <ContactCol>
                <Image
                  src={avatar || userImageFallback}
                  alt="contact's image"
                  width={50}
                  height={50}
                  priority
                />
              </ContactCol>
              <ContactCol>
                <p className="m-0">
                  {first_name} {last_name}
                </p>
              </ContactCol>
              <ContactCol>
                <Form.Check
                  type="checkbox"
                  checked={isChecked}
                  readOnly={true}
                />
              </ContactCol>
            </Row>
          );
        })
      )}
    </>
  );
};

export default ContactsTable;
