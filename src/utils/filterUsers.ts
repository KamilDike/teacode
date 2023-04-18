import { IUser } from "@/interfaces/IUser";

export function filterUsers(searchText: string, data: Array<IUser>) {
  return data.filter(({ first_name, last_name }) => {
    const fullName = `${first_name} ${last_name}`;
    return fullName.toLowerCase().includes(searchText.toLowerCase());
  });
}
