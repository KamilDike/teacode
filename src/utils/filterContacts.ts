import { IContact } from "@/interfaces/IContact";

export function filterContacts(searchText: string, data: Array<IContact>) {
  return data.filter(({ first_name, last_name }) => {
    const fullName = `${first_name} ${last_name}`;
    return fullName.toLowerCase().includes(searchText.toLowerCase());
  });
}
